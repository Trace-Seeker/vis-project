import React from 'react';
import style from './Item.scss';
import Split from '../Split/Split.js';
export default ({title, value}) => (
  <div>
    <div className={style.cItem}>
      <span className={style.uTitle}>{title}</span>
      <span className={style.uValue}>{value}</span>
    </div>
    <Split />
  </div>
)
