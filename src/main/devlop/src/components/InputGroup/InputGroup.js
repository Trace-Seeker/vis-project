/*
* @Author: zjhch123
* @Date:   2018-01-31 21:53:18
* @Last Modified time: 2018-01-31 22:00:22
*/

import React from 'react'
import style from './style.scss'

export default ({title, onValueChange, onEnterKeyDown, type="text", className="", placeholder=""}) => (
  <div className={`${style.cInputGroup} ${className}`}>
    <div className={style.uLabel}>
      <label>{title}</label>
    </div>
    <div className={style.uInput}>
      <input type={type} placeholder={placeholder} 
             onChange={(e) => onValueChange(e)}
             onKeyDown={(e) => e.keyCode === 13 && onEnterKeyDown(e)}
             />
    </div>
  </div>
)