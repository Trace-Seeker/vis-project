import Logo from './Logo.js';
import React from 'react';

export default ({src, width, height, className}) => (
  <Logo className={className}>
    <img title="logo" alt="logo" src={src} style={{display: 'block', width: width, height: height}}></img>
  </Logo>  
)