import React from 'react'
import style from './style.scss'
import Header from '../../components/ResultHeader/Header';
import Footer from '../../components/ResultFooter/Footer';
import SearchBar from '../../components/ResultHeader/SearchBar';
import URL from '../../link/';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

class SearchRule extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handlerSearchBarValueChange(e) {
    this.searchBarInputValue = e.target.value;
  }

  handlerSearchBarSubmitClick() {
    this.props.refreshLocation(this.searchBarInputValue, 1, URL.ShiChuang);
  }

  render() {
    return (
      <div className={style["cSearchrule"]}>
        <Header />
        <SearchBar 
            location={this.props.location}
            title={this.title}
            inputValueChange={(e) => this.handlerSearchBarValueChange(e)}
            submitClick={() => this.handlerSearchBarSubmitClick()}
            />
        <div className={style["container"]}>
          <div className={style["first_title"]}>
            <span>搜索模版</span>
          </div>
          <div className={style["rules"]}>
            <div className={`${style["box"]} box`}>
                <div className={style["panel"]}>
                    <div className={style["panel-heading"]}>
                        <span className={style["title"]}>CoDeSys</span>
                    </div>
                    <div className={style["panel-body"]}>
                        <img alt="img" src={require("../../resource/ruleimg/codesys.png")}/>
                        <a href="http://vis.hduzplus.xyz/search?q=port:2455">CoDeSys编程接口在全球范围内使用广泛，全球上百个设备制造商的自动化设备中都是用了该编程接口。</a>
                    </div>
                </div>
            </div>
            <div className={`${style["box"]} box`}>
                <div className={style["panel"]}>
                    <div className={style["panel-heading"]}>
                        <span className={style["title"]}>GE-SRTP</span>
                    </div>
                    <div className={style["panel-body"]}>
                        <img alt="img" src={require("../../resource/ruleimg/gesrtp.png" )}/>
                        <a href="http://vis.hduzplus.xyz/search?q=port:18245">GE-SRTP协议由美国通用电气公司开发，GE PLC可以通过GE-SRTP进行数据通信和数据传输。</a>
                    </div>
                </div>
            </div>
            <div className={`${style["box"]} box`}>
                <div className={style["panel"]}>
                    <div className={style["panel-heading"]}>
                        <span className={style["title"]}>SIEMENS</span>
                    </div>
                    <div className={style["panel-body"]}>
                        <img alt="img" src={require("../../resource/ruleimg/siemens.png" )}/>
                        <a href="http://vis.hduzplus.xyz/search?q=port:102">s7协议是SIEMENS s7协议族的标准通信协议，使用s7-应用接口的通信不依赖特定的总线系统。</a>
                    </div>
                </div>
            </div>
            <div className={`${style["box"]} box`}>
                <div className={style["panel"]}>
                    <div className={style["panel-heading"]}>
                        <span className={style["title"]}>omron</span>
                    </div>
                    <div className={style["panel-body"]}>
                        <img alt="img" src={require("../../resource/ruleimg/omron.png" )}/>
                        <a href="http://vis.hduzplus.xyz/search?q=port:9600">欧姆龙PLC使用网络协议FINS进行通信，可通过多种不同的物理网络，如以太网、控制器连接等。</a>
                    </div>
                </div>
            </div>
            <div className={`${style["box"]} box`}>
                <div className={style["panel"]}>
                    <div className={style["panel-heading"]}>
                        <span className={style["title"]}>Modbus</span>
                    </div>
                    <div className={style["panel-body"]}>
                        <img alt="img" src={require("../../resource/ruleimg/modbus.png" )}/>
                        <a href="http://vis.hduzplus.xyz/search?q=port:502">Modbus协议是应用于电子控制器上的一种协议。通过此协议设备间可以通信。它已成为一通用工业标准。</a>
                    </div>
                </div>
            </div>
            <div className={`${style["box"]} box`}>
                <div className={style["panel"]}>
                    <div className={style["panel-heading"]}>
                        <span className={style["title"]}>fox</span>
                    </div>
                    <div className={style["panel-body"]}>
                        <img alt="img" src={require("../../resource/ruleimg/fox.png" )}/>
                        <a href="http://vis.hduzplus.xyz/search?q=port:1911">Fox协议是Tridium公司开发的Niagara框架的一部分，广泛应用于楼宇自动化控制系统。</a>
                    </div>
                </div>
            </div>
            <div className={`${style["box"]} box`}>
                <div className={style["panel"]}>
                    <div className={style["panel-heading"]}>
                        <span className={style["title"]}>EtherNet/IP</span>
                    </div>
                    <div className={style["panel-body"]}>
                        <img alt="img" src={require("../../resource/ruleimg/ethernetip.png" )}/>
                        <a href="http://vis.hduzplus.xyz/search?q=port:44818">EtherNet/IP是一个面向工业自动化应用的工业应用层协议。它建立在标准UDP/IP与TCP/IP协议之上，利用固定以太网硬件和软件，为配置、访问和控制工业自动化设备定义了一个应用层协议。</a>
                    </div>
                </div>
            </div>
            <div className={`${style["box"]} box`}>
                <div className={style["panel"]}>
                    <div className={style["panel-heading"]}>
                        <span className={style["title"]}>dnp3</span>
                    </div>
                    <div className={style["panel-body"]}>
                        <img alt="img" src={require("../../resource/ruleimg/dnp.png" )}/>
                        <a href="http://vis.hduzplus.xyz/search?q=port:20000">DNP(Distributed Network Protocol，分布式网络规约)是一种应用于自动化组件之间的通讯协议，常见于电力、水处理等行业。SCADA可>
                            以使用DNP协议与主站、RTU、及IED进行通讯。</a>
                    </div>
                </div>
            </div>
            <div className={`${style["box"]} box`}>
                <div className={style["panel"]}>
                    <div className={style["panel-heading"]}>
                        <span className={style["title"]}>BACnet</span>
                    </div>
                    <div className={style["panel-body"]}>
                        <img alt="img" src={require("../../resource/ruleimg/bacnet.png" )}/>
                        <a href="http://vis.hduzplus.xyz/search?q=port:47808">楼宇自动控制网络数据通讯协议(BACnet)是针对采暖、通风、空调、制冷控制设备所设计，同时也为其他楼宇控制系统（例如照明、安保、消防等系统）的集成提供一个基本原则。</a>
                    </div>
                </div>
            </div>
            <div className={`${style["box"]} box`}>
                <div className={style["panel"]}>
                    <div className={style["panel-heading"]}>
                        <span className={style["title"]}>PCWorx</span>
                    </div>
                    <div className={style["panel-body"]}>
                        <img alt="img" src={require("../../resource/ruleimg/pcworx.png" )}/>
                        <a href="http://vis.hduzplus.xyz/search?q=port:1962">PCWorx协议由菲尼克斯电气公司开发，目前广泛使用于工控系统.PCWORX3.11是菲尼克斯电气公司专用协议。</a>
                    </div>
                </div>
            </div>
            <div className={`${style["box"]} box`}>
                <div className={style["panel"]}>
                    <div className={style["panel-heading"]}>
                        <span className={style["title"]}>MELSEC-Q</span>
                    </div>
                    <div className={style["panel-body"]}>
                        <img alt="img" src={require("../../resource/ruleimg/melsecqi.png" )}/>
                        <a href="http://vis.hduzplus.xyz/search?q=port:5007">MELSEC-Q系列设备使用专用的网络协议进行通讯，该系列设备可以提供高速、大容量的数据处理和机器控制。</a>
                    </div>
                </div>
            </div>
            <div className={`${style["box"]} box`}>
                <div className={style["panel"]}>
                    <div className={style["panel-heading"]}>
                        <span className={style["title"]}>HART-IP</span>
                    </div>
                    <div className={style["panel-body"]}>
                        <img alt="img" src={require("../../resource/ruleimg/hartip.png" )}/>
                        <a href="http://vis.hduzplus.xyz/search?q=port:5094">HART协议是美国Rosement公司于1985年推出的一种用于现场智能仪表和控制室设备之间的通信协议。现已成为全球智能仪表的工业标准。</a>
                    </div>
                </div>
            </div>
            <div className={`${style["box"]} box`}>
                <div className={style["panel"]}>
                    <div className={style["panel-heading"]}>
                        <span className={style["title"]}>redlion</span>
                    </div>
                    <div className={style["panel-body"]}>
                        <img alt="img" src={require("../../resource/ruleimg/redline.png" )}/>
                        <a href="http://vis.hduzplus.xyz/search?q=port:789">协议被Crimson桌面软件用于与Red Lion G306工控系统的HMI人机接口。</a>
                    </div>
                </div>
            </div>
            <div className={`${style["box"]} box`}>
                <div className={style["panel"]}>
                    <div className={style["panel-heading"]}>
                        <span className={style["title"]}>IEC 60870-5-104</span>
                    </div>
                    <div className={style["panel-body"]}>
                        <a href="http://vis.hduzplus.xyz/search?q=port:2404">IEC 60870-5-104是国际电工委员会制定的一个规范，用于适应和引导电力系统调度自动化的发展，规范调度自动化及远动设备的技术性能。</a>
                    </div>
                </div>
            </div>
            <div className={`${style["box"]} box`}>
                <div className={style["panel"]}>
                    <div className={style["panel-heading"]}>
                        <span className={style["title"]}>ProConOS</span>
                    </div>
                    <div className={style["panel-body"]}>
                        <a href="http://vis.hduzplus.xyz/search?q=port:20547">ProConOS是德国科维公司(KW-Software GmbH)开发的用于PLC的实时操作系统，它是一个高性能的PLC运行时引擎，目前广泛使用于基于嵌入式和PC的工控系统。</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.router.location
});

const mapDispatchToProps = (dispatch, props) => ({
  refreshLocation: function(condition, page, pathname = props.location.pathname) {
    dispatch(push({
      location: URL.ShiChuang,
      pathname: pathname,
      search: `?q=${condition}&_=${Date.now()}&page=${page}&pageSize=10`
    }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchRule);