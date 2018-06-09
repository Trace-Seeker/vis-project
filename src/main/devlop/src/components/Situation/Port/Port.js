import React from 'react';
import Echarts from 'echarts';
import style from './Port.scss';

export default class System extends React.Component {
  constructor(props) {
    super(props);
    this.port = []
    this.portData = []
    this.data = []
    this.option = {
        tooltip : {
            trigger: 'axis'
        },
        grid: {
          top: '8%',
          left: '2%',
          right: '2%',
          bottom: '5%',
          containLabel: true
        },
        xAxis : {
          type : 'category',
          data : this.port,
          axisLine: {lineStyle: {color: 'white'}},
          axisLabel: {color: 'white'}
        },
        yAxis : {
          type : 'value',
          axisLine: {lineStyle: {color: 'white'}},
          axisLabel: {color: 'white'}
        },
        series : [
            {
                name:'设备数',
                type:'bar',
                data: this.portData
            }
        ]
    };
  }
  mappingData() {
    this.port.splice(0)
    this.portData.splice(0)
    this.data.forEach((item) => {
      this.port.push(item.port)
      this.portData.push(item.num)
    })
    this.renderCharts();
  }
  componentWillUpdate(newProps) {
    this.data = newProps.data.result
    this.mappingData();
  }
  renderCharts() {
    if (!this.charts) {
      this.charts = Echarts.init(this.refs.charts);
    }
    this.charts.setOption(this.option);
  }
  render() {
    return (
      <div className={style.cPort}>
        <div ref="charts"
          className={style.cCharts}/>
      </div>
    )
  }
}