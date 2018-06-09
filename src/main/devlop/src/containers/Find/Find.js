import React from 'react';
import style from './Find.scss';
import Header from '../../components/IndexHeader/Header';
import Footer from '../../components/ResultFooter/Footer';
import Split from '../../components/Split/Split';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import URL from '../../link';

class Find extends React.Component {

  componentDidMount() {
      window.scrollTo(0, 0);
  }

  handlerKeyUp(e) {
    if (e.keyCode === 13) {
      this.handlerSearchClick();
    }
  }

  handlerSearchClick() {
    let condition = [].slice.call(document.querySelectorAll('input'), 0).reduce((_cond, ele) => {
      if (ele.value !== '') {        
        _cond.push(`${ele.getAttribute('data-for')}:${ele.value}`)
      }
      return _cond;
    }, []).join('&');
    this.props.StartSearch(condition);
  }

  render() {
    return (
      <div>
      <Header/>
      <div className={style["container-fluid"]}>
        <section className={style["title"]}>
            <span>高级搜索</span>
        </section>
        <Split />
        <section className={style["form"]}>
            <div className={style["form-group"]}>
                <label htmlFor="country">国家</label>
                <input onKeyUp={(e) => this.handlerKeyUp(e)} data-for="countryName" type="text" className={style["form-control"]} id="country" placeholder='China  "United State"' />
                <label>国家名</label>
            </div>
            <div className={style["form-group"]}>
                <label htmlFor="city">城市</label>
                <input onKeyUp={(e) => this.handlerKeyUp(e)} data-for="city" type="text" className={style["form-control"]} id="city" placeholder='Hangzhou "New York"'/>
                <label>城市名</label>
            </div>
            <div className={style["form-group"]}>
                <label htmlFor="company">企业</label>
                <input onKeyUp={(e) => this.handlerKeyUp(e)} data-for="org" type="text" className={style["form-control"]} id="company" placeholder='Alibaba "Verizon Wireless"'/>
                <label>企业名</label>
            </div>
            <div className={style["form-group"]}>
                <label>设备类型</label>
                <select className={style["form-control"]}>
                    <option>不限</option>
                    <option>工业控制设备 ics</option>
                    <option>蜜罐 honeypot</option>
                    <option>摄像头 camera</option>
                </select>
                <label></label>
            </div>
            <div className={style["form-group"]}>
                <label htmlFor="module">设备协议</label>
                <input onKeyUp={(e) => this.handlerKeyUp(e)} data-for="module" type="text" className={style["form-control"]} id="module" placeholder='S7  IEC-104'/>
                <label></label>
            </div>
            <div className={style["form-group"]}>
                <label htmlFor="port">开放端口</label>
                <input onKeyUp={(e) => this.handlerKeyUp(e)} data-for="port" type="text" className={style["form-control"]} id="port" placeholder='102'/>
                <label>一般情况下，一个设备协议对应一个端口号</label>
            </div>
            <div className={style["form-group"]}>
                <label htmlFor="transport">网络协议</label>
                <input onKeyUp={(e) => this.handlerKeyUp(e)} data-for="transport" type="text" className={style["form-control"]} id="transport" placeholder="TCP UDP"/>
                <label></label>
            </div>
            <div className={style["form-group"]}>
                <label htmlFor="isp">服务提供商</label>
                <input onKeyUp={(e) => this.handlerKeyUp(e)} data-for="isp" type="text" className={style["form-control"]} id="isp" placeholder="Aliyun"/>
                <label>指提供网络服务的运营商，中国常见的有阿里云,腾讯云</label>
            </div>
            <div className={style["form-group"]}>
                <label htmlFor="data">其他信息</label>
                <input onKeyUp={(e) => this.handlerKeyUp(e)} data-for="data" type="text" className={style["form-control"]} id="data" placeholder='Siemens "Linux UPnP Avtech"'/>
                <label>任何想搜索的信息</label>
            </div>
        </section>
        <Split />
        <section className={style["button"]}>
            <div className={style["button-group"]}>
                <a onClick={() => this.handlerSearchClick()} className={`${style["btn"]} ${style["u-search"]}`}>搜索</a>
            </div>
            <div className={style["button-group"]}>
                <Link to={URL.Index} className={`${style["btn"]} ${style["u-back"]}`}>返回首页</Link>
            </div>
        </section>
        <Split />
      </div>
      <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
    StartSearch: (condition) => {
      condition && dispatch(push({
        pathname: URL.ShiChuang,
        location: URL.ShiChuang,
        search: `q=${condition}&_=${Date.now()}`
      }));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Find);