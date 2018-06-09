import React from 'react';
import style from './LinkGroup.scss';
export default function LinkGroup(props) {
  return (
    <div className={style["m-link-group"] + " " + props.className}>
      <p className={style["u-title"]}>{props.title}</p>
      <ul>
        {
          React.Children.map(props.children, function(child) {
            return <li className={style["u-item"]}>{child}</li>;
          })
        }
      </ul>
    </div>
  )
}