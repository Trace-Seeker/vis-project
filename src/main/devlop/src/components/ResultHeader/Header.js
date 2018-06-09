import React from 'react';
import style from './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import URL from '../../link';

export default ({className}) => (
  <header className={`${style.cHeader} ${className || ''}`}>
    <div className={style.gLeft}>
      <NavLink exact to={URL.Index} className={style.uLinkItem} activeClassName={style.active}>首页</NavLink>
      <NavLink to={{
        pathname: URL.HighSearch,
        search: window.location.search
      }} className={style.uLinkItem} activeClassName={style.active}>势窗</NavLink>
      <a href={URL.ShiJie} className={style.uLinkItem}>势界</a>
      <NavLink exact to={URL.SearchRule} className={style.uLinkItem} activeClassName={style.active}>搜索模板</NavLink>
      <Link to={URL.Situation} className={style.uLinkItem}>态势</Link>
      {/*<NavLink exact to={URL.Module} className={style.uLinkItem} activeClassName={style.active}>协议支持</NavLink>*/}
      <Link to={URL.Help} className={style.uLinkItem}>帮助</Link>
      <Link to={URL.About} className={style.uLinkItem}>关于</Link>
    </div>
    <div className={style.gRight}>
      <Link to={URL.Register} className={style.uLinkItem} activeClassName={style.active}>注册</Link>
      <Link to={URL.Login} className={style.uLinkItem} activeClassName={style.active}>登录</Link>
    </div>
  </header>
)