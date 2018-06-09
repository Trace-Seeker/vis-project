import React from 'react';
import style from './Split.scss';

export default ({className}) => {
  return (
    <hr className={`${style.hr} ${className || ''}`}/>
  )
}