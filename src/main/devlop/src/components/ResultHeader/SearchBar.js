import React from 'react';
import style from './SearchBar.scss';
import Split from '../Split/Split';
import Brand from '../Brand/Brand';
import {NavLink} from 'react-router-dom';

export default ({title, detail, inputValueChange, submitClick, location}) => (
  <div className={`${style.cSearchBar}`}>
    <div className={style.mRow1}>
      <Brand className={style.mBrand}/>
      <div className={style.mForm}>
        <input type="text" className={style.uInput}  
              placeholder="请输入查询条件"
              defaultValue={title || ''} 
              onChange={(e) => inputValueChange(e)}
              onKeyDown={(e) => e.keyCode === 13 && submitClick()}/>
        <a className={style.mBtn} 
            onClick={() => submitClick()}>
            立即鉴势
        </a>
      </div>
      <span className={style.uTip}>数据最新获取时间：2017年07月06日</span>
    </div>
    { 
      detail &&
        <div className={style.mRow2}>
          <NavLink exact className={style.uTab} activeClassName={style.active} to={{
            pathname: '/search',
            search: location.search,
            hash: location.hash
          }}>搜索结果</NavLink>
          <NavLink className={style.uTab} activeClassName={style.active} to={{
            pathname: '/search/map',
            search: location.search,
            hash: location.hash
          }}>概览</NavLink>
        </div>
    }
    <Split />
  </div>
)


