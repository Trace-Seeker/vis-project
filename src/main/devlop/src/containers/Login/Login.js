/*
* @Author: zjhch123
* @Date:   2018-01-31 21:35:16
* @Last Modified time: 2018-01-31 23:25:52
*/
import Header from '../../components/ResultHeader/Header';
import Footer from '../../components/ResultFooter/Footer';
import IMGLogo from '../../components/Logo/IMGLogo';
import InputGroup from '../../components/InputGroup/InputGroup';
import Button from '../../components/Button/Button';
import React from 'react';
import style from './style.scss';


class Login extends React.Component {

  render() {
    return (
      <div className={style.cLogin}>
        <Header />
        <main className={style.gMain}>
          <div className={style.gLeft}>
            <IMGLogo src={require('../../resource/image/logo_banner.png')} width="122px" height="122px" className={style.mLogo} />
            <div className={style.mText}>
              <p className={style.uTitle}>用户登录</p>
              <p className={style.uText}>登录之后，您可以获得：</p>
              <p className={style.uText}>* 更详细的搜索结果</p>
              <p className={style.uText}>* 更详细的搜索信息</p>
              <p className={style.uText}>* 更全面的过滤器</p>
            </div>
          </div>
          <div className={style.gRight}>
            <InputGroup title="用户名" 
                        onValueChange={(e) => {console.log(e)}}
                        onEnterKeyDown={(e) => {console.log(e)}}
                        />
            <InputGroup title="密码" 
                        className={style.uPasswordInput}
                        onValueChange={(e) => {console.log(e)}}
                        onEnterKeyDown={(e) => {console.log(e)}}
                        type="password"
                        />
            <Button title="登录"
                    className={style.uSubmitBtn}
                    type="blue"
                    onClick={(e) => {alert('暂未开放登录')}}
                    />
            <p className={style.uForget}>忘记密码?</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Login