import React from 'react';
import style from './Score.scss';
import Echarts from 'echarts';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props.data.result.score
    this.type = '优秀'
    this.score = [0,0,0,0,0];
    this.option = {
      tooltip: {},
      radar: {
          name: {
              textStyle: {
                  color: '#fff'
            }
          },
          indicator: [
            { name: '漏洞安全', max: 100},
            { name: '联网情况', max: 100},
            { name: '防火墙部署', max: 100},
            { name: '安全常识', max: 100},
            { name: '系统架构', max: 100},
          ]
      },
      series: [{
          type: 'radar',
          data : [{value : this.score}],
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          lineStyle: {
            normal: {
              width: 5
            }
          }
      }]
    };
  }
  mappingData() {
    this.score.splice(0)
    this.score[0] = this.data['security'] || 0
    this.score[1] = this.data['network'] || 0
    this.score[2] = this.data['firewall'] || 0
    this.score[3] = this.data['knowledge'] || 0
    this.score[4] = this.data['system'] || 0
    this.avg = this.score.reduce((a,b) => {return a + b}, 0) / 5
    if (this.avg > 70) {
      this.type = '轻度'
    } else if (this.avg > 50) {
      this.type = '中度'
    } else {
      this.type = '高危'
    }
    this.renderCharts()
  }
  componentWillUpdate(newProps) {
    this.data = newProps.data.result.score
    this.mappingData()
  }
  renderCharts() {
    if (!this.charts) {
      this.charts = Echarts.init(this.refs.charts);
    }
    this.charts.setOption(this.option);
  }
  render() {
    return (
      <div className={style.cScore}>
        <p className={style.uScore}>整体评分: {this.avg}分</p>
        <p className={style.uRank}>危害等级: {this.type}</p>
        <div ref="charts"
          className={style.cCharts}/>
      </div>
    )
  }
}