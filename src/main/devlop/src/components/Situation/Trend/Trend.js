import React from 'react';
import style from './Trend.scss';
import Echarts from 'echarts';

export default class Trend extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data.result
    this.renderData = {"subtext":"漏洞趋势分布（周）","dataWeek":["五周","四周","三周","二周","一周","本周"],"repairedNum":[0,0,0,0,0,0],"notRepairedNum":[0,0,0,0,0,0],"countNum":[0,0,0,0,0,0]};
    this.option = {
      tooltip : {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '0%'];
        }
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '5%',
        top: '16%',
        containLabel: true
      },
      calculable : true,
      legend: {
        x: 'right',
        y : 'top',
        data:['全部','已修复','未修复'],
        textStyle: {color: 'white'},
      },
      xAxis : [
        {
          type : 'category',
          data : this.renderData.dataWeek,
          axisLine: {lineStyle: {color: 'white'}},
          axisLabel: {color: 'white'}
        }
      ],
      yAxis : [
        {
          type : 'value',
          splitNumber: 3,        
          axisLabel : {
            formatter: '{value}',
            color: 'white'
          },
          axisLine: {lineStyle: {color: 'white'}}
        }
      ],
      series : [{
        name:'已修复',
        type:'bar',
        itemStyle:{
          normal:{
            label:{
              show:true
            },
            lineStyle:{
              width:5
            }
          }
        },
        data:this.renderData.repairedNum
      },{
        name:'未修复',
        type:'bar',
        itemStyle:{
          normal:{
            label:{
              show:true
            },
            lineStyle:{
              width:5
            }
          }
        },
        data:this.renderData.notRepairedNum
      },{
        name:'全部',
        type:'line',
        itemStyle:{
          normal:{
            label:{
              show:true
            },
            lineStyle:{
              width:3
            }
          }
        },
        data:this.renderData.countNum
      }]
    };
  }
  mappingData() {
    this.renderData.repairedNum.splice(0)
    this.renderData.notRepairedNum.splice(0)
    this.renderData.countNum.splice(0)
    this.data.forEach((item) => {
      this.renderData.repairedNum.push(item.repaired)
      this.renderData.notRepairedNum.push(item.notRepaired)
      this.renderData.countNum.push(item.total)
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
      <div className={style.cTrend}>
        <div ref="charts"
          className={style.cCharts}/>
      </div>
    )
  }
}