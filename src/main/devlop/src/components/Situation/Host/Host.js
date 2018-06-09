import React from 'react';
import style from './Host.scss';
import util from '../../../util'

export default class Host extends React.Component {
  constructor(props) {
    super(props)
    this.data = []
  }
  componentWillUpdate(newProps) {
    this.data = newProps.data.result
  }
  render() {
    return (
      <div className={style.cHost}>
        <table className={style.mTable}>
          <thead className={style.uThead}>
            <tr>
              <th className={style.id}>#</th>
              <th className={style.ip}>IP</th>
              <th className={style.province}>省份</th>
              <th className={style.time}>采集时间</th>
              <th className={style.type}>采集方式</th>
            </tr>
          </thead>
          <tbody className={style.uTbody}>
            {
              this.data.map((item, index) => (
                <tr key={index}>
                  <td className={style.id}>{index + 1}</td>
                  <td className={style.ip}>{item.ip}</td>
                  <td className={style.province}>{util.mappingProvince(item.area)}</td>
                  <td className={style.time}>{item.date.replace(/-/g, '.')}</td>
                  <td className={style.type}>{item.type === 'scanner' ? '线上' : '线下'}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}
