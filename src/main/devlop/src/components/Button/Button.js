import React from 'react';
import style from './Button.scss';
import PropTypes from 'prop-types';

/**
 * 
 * @param {type} blue gray
 */
const Button = ({title, className, type, onClick}) => (
  <div className={`${style.cBtn} ${className}`}>
    <a className={`${style.uBtn} ${style[type]}`} onClick={() => onClick && onClick()}>
      {title}
    </a>
  </div>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;