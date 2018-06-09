import Logo from './Logo.js';
import React from 'react';

export default ({src, width, height, className}) => (
  <Logo className={className}>
    <iframe title="logo" src={src} frameBorder="0" scrolling="no" style={{width: width, height: height}}></iframe>
  </Logo>  
)