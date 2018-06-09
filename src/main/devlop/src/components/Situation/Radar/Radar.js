import React from 'react';
import style from './Radar.scss';

export default class Radar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isFind: false,
      count: 0
    }
  }

  handlerClick() {
    if (!this.state.isFind) {
      return
    }
    this.setState({
      isFind: false,
      count: 0
    })
    window.open('http://scanner.hduzplus.xyz');
    this.nextTick();
  }

  componentDidMount() {
    this.nextTick();
  }

  nextTick() {
    let NextTime = 30 + Math.random() * 60
    setTimeout(() => {
      this.setState({
        isFind: true,
        count: parseInt((Math.random() * 100 % 5) + 1, 10)
      })
    }, NextTime * 1000)
  }

  render() {
    let bugs = []
    for (let i = 0; i < this.state.count; i ++) {
      const __ = Math.random() > 0.5 ? 1 : -1
      const x = 60 + __ * Math.random() * 90 % 40
      const y = 60 + __ * Math.random() * 110 % 40
      bugs.push(<div className={style.uBug} style={{top: x, left: y}}></div>)
    }
    return (
      <div className={`${style.cRadar} ${this.state.isFind ? style.effective : ''}`}>
        <div className={style.mRadarContainer}>
          <div className={`${style.uRadar} ${style.effect}`}>
            <div className={style.uPoint}></div>
            {bugs}
          </div>
        </div>
        <p className={style.uTip} onClick={() => this.handlerClick()}>{this.state.isFind ? `发现${this.state.count}个安全威胁! 立即处理!` : '暂未发现安全威胁'}</p>
      </div>
    )
  }

}