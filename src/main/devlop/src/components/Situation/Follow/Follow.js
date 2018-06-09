import React from 'react';
import style from './Follow.scss';
import Echarts from 'echarts';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data.reuslt
    let base = new Date().getTime()
    const oneDay = 24 * 60 * 60 * 1000;
    this.onlineData = {
      date: [],
      ics: [],
      camera: []
    }
    this.offlineData = {
      date: [],
      ics: [],
      camera: []
    }
    for (var i = 0; i < 350; i++) {
      var now = new Date(base -= oneDay);
      this.onlineData.date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
      this.offlineData.date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    }
    this.baseOption = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '60%'];
            }
        },
        grid: {
            left: '1%',
            right: '1%',
            bottom: '6%',
            top: '6%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.onlineData.date.reverse(),
            axisLine: {lineStyle: {color: 'white'}},
            axisLabel: {color: 'white'}
        },
        yAxis: [
          {
            type: 'value',
            boundaryGap: [0, '20%'],
            min: function(value) {
                return value.min - 300 > 0 ? value.min - 300 : 0;
            },
            axisLine: {lineStyle: {color: 'white'}},
            axisLabel: {
              color: 'white'
            },
            splitLine: {show: false}
          },
          {
            type: 'value',
            boundaryGap: [0, '20%'],
            splitNumber: 5,
            min: function(value) {
                return value.min - 30 > 0 ? value.min - 30 : 0;
            },
            axisLine: {lineStyle: {color: 'white'}},
            axisLabel: {
              color: 'white'
            },
            splitLine: {show: false}
          }
        ],
        series: [
            {
                name:'工控设备数据量',
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                }
            },
            {
              name:'摄像头数据量',
              type:'line',
              smooth:true,
              symbol: 'none',
              sampling: 'average',
              yAxisIndex: 1,
              itemStyle: {
                  normal: {
                      color: '#0099CC'
                  }
              },
              areaStyle: {
                  normal: {
                      color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#3366CC'
                      }, {
                          offset: 1,
                          color: '#0099CC'
                      }])
                  }
              }
          }
        ]
    };
    this.optionOnline = JSON.parse(JSON.stringify(this.baseOption));
    this.optionOffline = JSON.parse(JSON.stringify(this.baseOption));
    this.optionOnline.series[0].data = this.onlineData.ics;
    this.optionOnline.series[1].data = this.onlineData.camera;
    this.optionOffline.series[0].data = this.offlineData.ics;
    this.optionOffline.series[1].data = this.offlineData.camera;
  }



  componentWillUpdate(newProp) {
    this.data = newProp.data.result
    this.mappingData()
  }

  mappingData() {
    this.onlineData.ics.splice(0)
    this.onlineData.camera.splice(0)
    this.offlineData.ics.splice(0)
    this.offlineData.camera.splice(0)
    this.data.forEach(item => {
      if (item.online === 0) {
        item.info.forEach(v => this.offlineData[item.type].push(v.num))
      } else if (item.online === 1) {
        item.info.forEach(v => this.onlineData[item.type].push(v.num))
      }
    })
    this.renderCharts()
  }

  renderCharts() {
    if (!this.chartsOnline) {
      this.chartsOnline = Echarts.init(this.refs.chartsOnline);
    }
    this.chartsOnline.setOption(this.optionOnline);
    if (!this.chartsOffline) {
      this.chartsOffline = Echarts.init(this.refs.chartsOffline);
    }
    this.chartsOffline.setOption(this.optionOffline);
  }
  render() {
    return (
      <div className={style.cFollow}>
        <div className={style.gLeft}>
          <div className={style.mContainer}>
            <p className={style.uTitle}>线上扫描</p>
            <div ref="chartsOnline"
                className={style.cCharts}/>
          </div>
        </div>
        <div className={style.gRight}>
          <div className={style.mContainer}>
            <p className={style.uTitle}>线下核查</p>
            <div ref="chartsOffline"
                className={style.cCharts}/>
          </div>
        </div>
      </div>
    )
  }
}