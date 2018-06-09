import React from 'react';
import style from './Province.scss';
import util from '../../../util';

export default class Province extends React.Component {

  constructor(props) {
    super(props);
    this.option = {
      provinces: []
    }
  }

  componentWillUpdate(newProps) {
    this.option.provinces = newProps.data.result.map((item) => ({
      provincepy: item.area,
      province: util.mappingProvince(item.area),
      count: item.num
    }))
  }

  handlerTRClick(provincepy, province) {
    this.props.showProvince(provincepy, province);
  }

  render() {
    return (
      <div className={style.cProvince}>
        <table className={style.mTable}>
          <thead className={style.uThead}>
            <tr>
              <th className={style.id}>#</th>
              <th className={style.province}>省份</th>
              <th className={style.count}>总数</th>
            </tr>
          </thead>
          <tbody className={style.uTbody}>
            {
              this.option.provinces.map((data, index) => (
                <tr key={index} onClick={() => this.handlerTRClick(data.provincepy, data.province)}>
                  <td className={style.id}>{index + 1}</td>
                  <td className={style.province}>{data.province}</td>
                  <td className={style.count}>{data.count}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}