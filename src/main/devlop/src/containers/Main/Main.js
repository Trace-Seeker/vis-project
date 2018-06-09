import React from 'react';
import Header from '../../components/IndexHeader/Header';
import SVGLogo from '../../components/Logo/SVGLogo';
import Button from '../../components/Button/Button';
import Footer from '../../components/IndexFooter/Footer';
import Split from '../../components/Split/Split';
import { Link } from 'react-router-dom';
import URL from '../../link';
import style from './Main.scss';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.timeInterval = null;
    this.scrollInput = ['port:102', 'country:cn', 'module:s7', 'port:502 country:cn'];
    this.scrollIndex = 1;
    this.queryCondition = 'port:102';
    this.state = {
      showPop: false
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.timeInterval = setInterval(() => {
      let inputValue = this.scrollInput[this.scrollIndex];
      this.refs.searchInput.setAttribute('placeholder', inputValue);
      if (this.refs.searchInput.value === '') {
        this.queryCondition = inputValue;
      }
      this.scrollIndex = (this.scrollIndex + 1) % 4;
    }, 2000);
    document.addEventListener('keypress', this.handlerHelp.bind(this))
  }
  
  componentWillUnmount() {
    window.clearInterval(this.timeInterval);
    document.removeEventListener('keypress', this.handlerHelp.bind(this))
  }

  handlerHelp(event) {
    if (document.activeElement === this.refs.searchInput) {
      return;
    }
    if (event.key && event.key === '?') {
      let showPop = !this.state.showPop
      this.setState({
        showPop: showPop
      })
    } 
    if (event.key && event.key === 'G') {
      event.preventDefault()
      this.setState({
        showPop: false
      })
      this.refs.searchInput.focus()
    } 
  }

  handlerChange(event) {
    this.queryCondition = event.target.value;
  }

  handlerKeyDown(e) {
    if (e.keyCode === 13) {
      this.props.StartSearch(this.queryCondition);
    }
  }

  render() {
    return (
      <div className={style.cMain}>
        <Header />
        <main className={style.gMain}>
          <div className={style.mMain}>
            <SVGLogo className={style.uLogo} src={require('../../resource/image/logo.svg')} width="170px" height="170px" />
            <h1 className={style.uTitle}>工控设备在线搜索与可视化平台</h1>
            <div className={style.mInput}>
              <input type="text" className={style.uInput} ref="searchInput" placeholder={this.scrollInput[0]} onChange={(e) => this.handlerChange(e)} onKeyDown={(e) => this.handlerKeyDown(e)}/>
            </div>
            <div className={style.mBtnGroup}>
              <Button title="鉴势一下" className={style.uBtn} type="blue" onClick={() => this.props.StartSearch(this.queryCondition)}/>
              <Link to={URL.HighSearch} className={`${style.uBtn} ${style.uSearch}`}>高级搜索</Link>
            </div>
            <div className={style.mTip}>
              <p className={style.uTip}>提示:按下Shift+/显示帮助</p>
            </div>
          </div>
          <div className={`${style.mFloat} ${this.state.showPop ? style.fShow : ''}`}>
            <p className={style.uTipTitle}>快捷帮助</p>
            <Split/>
            <div className={style.uTip}>
              <p className={style.uTipSubTitle}>过滤器</p>
              <ul className={style.uTipContainer}>
                <li><span className={style.key}>port:</span>端口号</li>
                <li><span className={style.key}>transport:</span>网络协议</li>
                <li><span className={style.key}>country:</span>国家,国家代码</li>
                <li><span className={style.key}>countryName:</span>国家,国家名</li>
                <li><span className={style.key}>city:</span>城市,拼音或英文</li>
                <li><span className={style.key}>module:</span>设备协议</li>
                <li><span className={style.key}>isp:</span>供应商</li>
                <li><span className={style.key}>org:</span>企业</li>
                <li><span className={style.key}>ip:</span>ip地址</li>
                <li><span className={style.key}>server:</span>服务</li>
              </ul>
            </div>
            <div className={style.uTip}>
              <p className={style.uTipSubTitle}>快捷键</p>
              <ul className={style.uTipContainer}>
                <li><span className={style.key}>shift+/:</span>打开/关闭提示</li>
                <li><span className={style.key}>shift+g:</span>焦点定位至搜索</li>
              </ul>
            </div>
          </div>
        </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
