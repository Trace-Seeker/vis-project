import React from 'react';
import style from './Tag.scss';

export default ({title, type}) => (
  <span className={style.tag} style={{backgroundColor:type}}>{title}</span>
)