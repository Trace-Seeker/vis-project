import React from 'react';
import style from './System.scss';
import Echarts from 'echarts';

export default class System extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props.data.result
    this.date = []
    this.cpu = []
    this.mem = []
    this.option = {
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data:['内存(%)','cpu(%)'],
          top: '18%',
          textStyle: {
            color: 'white'
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '8%',
          top: '30%',
          containLabel: true
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.date,
          axisLabel: {
            color: 'white'
          },
          splitLine: {
            show: false
          }
      },
      yAxis: {
          type: 'value',
          axisLabel: {
            color: 'white'
          },
          max: function(value) {
            return value.max + 20 > 100 ? 100 : value.max + 20
          }
      },
      series: [
          {
              name:'内存(%)',
              type:'line',
              data:this.mem
          },
          {
              name:'cpu(%)',
              type:'line',
              data:this.cpu
          }
      ]
    };
  }
  mappingData() {
    this.date.splice(0)
    this.cpu.splice(0)
    this.mem.splice(0)
    this.data.sort(function(a,b) {return a.date > b.date}).forEach(item => {
      this.date.push(item.date.replace(/-/g, ''))
      this.cpu.push(item.cpu)
      this.mem.push(item.mem)
    })
    this.renderCharts()
  }
  componentWillUpdate(newProps) {
    this.data = newProps.data.result
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
      <div className={style.cSystem} id="systemChartsContainer">
        <p className={style.uSystem}>系统已平稳运行: 31天20小时</p>
        <div ref="charts"
          className={style.cCharts}/>
      </div>
    )
  }
}