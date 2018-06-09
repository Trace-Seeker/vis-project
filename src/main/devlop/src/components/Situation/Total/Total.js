import React from 'react';
import style from './Total.scss';

export default class Total extends React.Component {
  constructor(props) {
    super(props)
    this.data = props.data.result
    this.online = {}
    this.offline = {}
    this.total = 0
    this.mappingData();
  }
  mappingData() {
    this.total = 0
    this.data.online.forEach((item) => {
      this.online[item.key] = item.count
      this.total += item.count
    })
    this.data.offline.forEach((item) => {
      this.offline[item.key] = item.count
      this.total += item.count
    })
  }

  componentWillUpdate(newProps) {
    this.data = newProps.data.result
    this.mappingData()
  }

  render() {
    return (
      <div className={`${style.cTotal} ${this.props.className || ''}`}>
        <div className={style["mContainer"]}>
          <div className={style["mTable"]}>
            <div className={style["u-row"]}>
              <span className={style["uLabel"]}></span>
              <span className={style["uLabel"]}>扫描平台</span>
              <span className={style["uLabel"]}>线下核查</span>
            </div>
            <div className={style["u-row"]}>
              <span className={style["uLabel"]}>工控设备数</span>
              <span className={style["uLabel"]}>{this.online.ics || 0}</span>
              <span className={style["uLabel"]}>{this.offline.ics || 0}</span>
            </div>
            <div className={style["u-row"]}>
              <span className={style["uLabel"]}>摄像头</span>
              <span className={style["uLabel"]}>{this.online.camera || 0}</span>
              <span className={style["uLabel"]}>{this.offline.camera || 0}</span>
            </div>
            <div className={style["u-row"]}>
              <span className={style["uLabel"]}>蜜罐</span>
              <span className={style["uLabel"]}>{this.online.honeypot || 0}</span>
              <span className={style["uLabel"]}>{this.offline.honeypot || 0}</span>
            </div>
          </div>
          <div className={style["uTotal"]}>
            <p>设备总数 {this.total}</p>
          </div>
        </div>
      </div>
    )
  }
}