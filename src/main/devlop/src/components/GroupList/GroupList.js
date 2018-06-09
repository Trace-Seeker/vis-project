import React from 'react';
import Item from './Item.js';
import style from './GroupList.scss';
import Split from '../Split/Split';

export default ({title, data, condition}) => {
  const sum = data.reduce(function(a, b) {
    return a + b.doc_count;
  }, 0);
  return (
    <div>
      <p className={style.uTitle}>{title}</p>  
      <div>
        {data.map(_d => <Item data={_d} key={_d.doc_count + _d.key} condition={condition} percent={_d.doc_count / sum * 100}/>)}
      </div>
      <Split />
    </div>
  )
}
