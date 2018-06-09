import React from 'react';
import style from './Block.scss';

const Column = (props) => (
  <div className={`${props.className}  ${style.cColumn}`}>
    { props.children }
  </div>
)

const Block = (props) => (
  <div className={`${props.className}  ${style.cBlock}`}>
    { props.children }
  </div>
)

const Title = (props) => (
  <div className={`${props.className} ${style.uTitle}`}>
    <p>{ props.children }</p>
  </div>
)

const Container = (props) => (
  <div className={`${props.className} ${style.cContainer}`}>
    { props.children }
  </div>
)

Block.defaultProps = {
  className: ''
}
Title.defaultProps = {
  className: ''
}
Column.defaultProps = {
  className: ''
}
Container.defaultProps = {
  className: ''
}
Block.Title = Title;
Block.Column = Column;
Block.Container = Container;
export default Block;