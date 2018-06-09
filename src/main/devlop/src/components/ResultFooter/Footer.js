import React from 'react';
import style from './Footer.scss';
import Footer from '../IndexFooter/Footer';
import {NavLink} from 'react-router-dom';
import LinkGroup from '../LinkGroup/LinkGroup';
import URL from '../../link';

export default () => (
  <div className={style.cFooter}>
    <div className={style.gRow}>
      <LinkGroup className={style.mGroup1} title="主导航">
        <NavLink activeClassName={style.active} exact to={URL.Index}>首页</NavLink>
        <NavLink activeClassName={style.active} exact to={URL.HighSearch}>势窗</NavLink>
        <a href={URL.ShiJie} target='_blank'>势界</a>
        <NavLink activeClassName={style.active} exact to={URL.SearchRule}>搜索模板</NavLink>
        <NavLink activeClassName={style.active} exact to={URL.Situation}>态势感知</NavLink>
      </LinkGroup>
      <LinkGroup className={style.mGroup2} title="更多">
        <NavLink activeClassName={style.active} exact to={URL.OpenAPI}>开放API</NavLink>        
        <NavLink activeClassName={style.active} exact to={URL.Module}>协议支持</NavLink>        
        <NavLink activeClassName={style.active} exact to={URL.Topic}>专题报告</NavLink>
        <NavLink activeClassName={style.active} exact to={URL.Upload}>提交检测</NavLink>
        <NavLink activeClassName={style.active} exact to={URL.UpgradeLog}>更新记录</NavLink>
      </LinkGroup>
      <LinkGroup className={style.mGroup3} title="支持">
        <NavLink activeClassName={style.active} exact to={URL.Help}>用户手册</NavLink>
        <NavLink activeClassName={style.active} exact to={URL.Reply}>反馈</NavLink>
        <NavLink activeClassName={style.active} exact to={URL.About}>关于我们</NavLink>
      </LinkGroup>
    </div>
    <div className={style.gRow}>
      <LinkGroup className={style.mGroup3} title="联系我们">
        <a to="mail:jiahao.zhang@hduzplus.xyz">mailto: Jiahao.Zhang@hduzplus.xyz</a>
        <span>杭州电子科技大学 - 觅迹寻踪团队</span>
      </LinkGroup>
    </div>
    <Footer />
  </div>
)