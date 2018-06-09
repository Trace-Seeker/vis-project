import React from 'react';
import URL from '../../link';
import {Link, NavLink} from 'react-router-dom';
import style from './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className={`${style.cHeader} ${this.props.className || ''} f-cb`}>
        <div className={style.gLeft}>
          <Link to={URL.Index} className={`${style.mLogo} ${style.uLinkItem}`}>鉴势</Link>
        </div>
        <div className={style.gRight}>
          <Link to={URL.Index} className={style.uLinkItem}>首页</Link>
          <NavLink exact to={URL.HighSearch} className={style.uLinkItem} activeClassName={style.active}>势窗</NavLink>
          <a href={URL.ShiJie} className={style.uLinkItem}>势界</a>
          <NavLink exact to={URL.SearchRule} className={style.uLinkItem} activeClassName={style.active}>搜索模板</NavLink>
          <NavLink exact to={URL.Situation} className={style.uLinkItem} activeClassName={style.active}>态势</NavLink>
          {/*<NavLink exact to={URL.Module} className={style.uLinkItem} activeClassName={style.active}>协议支持</NavLink>*/}
          <NavLink exact to={URL.Help} className={style.uLinkItem} activeClassName={style.active}>帮助</NavLink>
          <NavLink exact to={URL.About} className={style.uLinkItem} activeClassName={style.active}>关于</NavLink>
          <NavLink exact to={URL.Register} className={style.uLinkItem} activeClassName={style.active}>注册</NavLink>
          <NavLink exact to={URL.Login} className={style.uLinkItem} activeClassName={style.active}>登录</NavLink>
        </div>
      </header>
    )
  }
}