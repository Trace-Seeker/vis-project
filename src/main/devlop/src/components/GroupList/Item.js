import React from 'react';
import style from './Item.scss';
import {Link} from 'react-router-dom';
import Util from '../../util/';

export default ({data, condition, percent}) => (
  <div className={style.cItem}>
    <Link className={style.gLeft} 
       to={{
        pathname: `/search`,
        search: `?q=${Util.getUrlParam(window.location.search, 'q')} ${condition}:"${data.key}"`
      }}>{data.key}</Link>
    <span className={style.gRight}>{data.doc_count}</span>
    <span className={style.gBg} style={{transform: `translateX(${100 - percent}%)`}}></span>
  </div>
)
