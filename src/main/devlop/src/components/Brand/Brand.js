import React from 'react';
import IMGLogo from '../Logo/IMGLogo';
import style from './Brand.scss';

export default ({className}) => (
  <div className={`${style.cBrand} ${className || ''}`}>
    <IMGLogo className={style.uLogoImg} src={require('../../resource/image/logo.png')} width="56px" height="56px"/>
    <div className={style.uLogoLabel}>
      <p className={style.uLogoTitle}>鉴势</p>
      <p className={style.uLogoSubtitle}>工控设备搜索平台</p>
    </div>
  </div>
)