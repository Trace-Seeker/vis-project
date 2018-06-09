import React from 'react';
import style from './Help.scss';
import Header from '../../components/IndexHeader/Header';
import Footer from '../../components/ResultFooter/Footer';

export default class Help extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header />
        <div className={style.cHelp}>
          <div className={style.mLogo}>
            <img className={style.uLogo} alt="logo" src={require("../../resource/image/logo_banner.png")}/>
            <div className={style.uContent}>
              <p className={style.title}>帮助</p>
              <p className={style.subtitle}>工控设备在线搜索与可视化平台</p>
            </div>
          </div>
          <main className={style.mMain}>
            <section className={style.mSection}>
              <h2 className={style.fMainColor}>概述</h2>
              <h3>鉴势是一款针对工控设备的、具有可视化功能的搜索平台。</h3>
              <p>工业控制系统是控制我们世界的计算机，它们负责管理办公室的空调，发电厂的涡轮机，剧院的灯光或工厂的机器人等等一系列和我们生活息息相关的设备。</p>
            </section>
            <section className={style.mSection}>
              <h2 className={style.fMainColor}>搜索策略</h2>
              <div>
              <p>我们提供最基础的搜索方式，直接输入关键词就可以开始搜索。</p>
                <ul>
                  <li>搜索西门子设备: <span className={style.fValue}>Siemens</span></li>
                  <li>搜索SCADA设备: <span className={style.fValue}>SCADA</span></li>
                </ul>
              </div>
              <h3 className={style.fMainColor}>过滤器</h3>
              <div>
                <p>我们提供了一系列过滤器帮助您进行精确的搜索。</p>
                <ul>
                  <li><span className={style.fKey}>port:</span>针对某个端口号进行搜索,例如: <span className={style.fKey}>port:102</span></li>
                  <li>
                    <span className={style.fKey}>transport:</span>针对某种网络协议进行搜索,例如: <span className={style.fKey}>transport:tcp</span>
                  </li>
                  <li>
                    <span className={style.fKey}>country:</span>针对某个国家进行搜索,国家需要使用国家代码,例如: <span className={style.fKey}>country: CN</span>
                  </li>
                  <li>
                    <span className={style.fKey}>city:</span>针对某个城市进行搜索,例如: <span className={style.fKey}>city: Hangzhou</span>
                  </li>
                  <li>
                    <span className={style.fKey}>module:</span>针对某个设备协议进行搜索,例如: <span className={style.fKey}>module: s7</span>
                  </li>
                  <li>
                    <span className={style.fKey}>isp:</span>针对某个供应商进行搜索,例如: <span className={style.fKey}>isp: Aliyun</span>
                  </li>
                  <li>
                    <span className={style.fKey}>org:</span>针对某个企业进行搜索,例如: <span className={style.fKey}>org: Alibaba</span>
                  </li>
                  <li>
                    <span className={style.fKey}>ip:</span>针对指定的ip地址进行搜索,例如: <span className={style.fKey}>ip: 139.129.132.196</span>
                  </li>
                  <li>
                    <span className={style.fKey}>server:</span>针对某项服务进行搜索,例如: <span className={style.fKey}>server:"linux upnp"</span>
                  </li>
                </ul>
              </div>
              <h3 className={style.fMainColor}>本地化</h3>
                <p>我们提供了专门针对国人的过滤器。</p>
                <table>
                  <thead>
                    <tr>
                      <td>过滤器</td>
                      <td>可以写作</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className={style.fKey}>port:</span></td>
                      <td><span className={style.fKey}>端口:</span>或<span className={style.fKey}>端口号:</span></td>
                    </tr>
                    <tr>
                      <td><span className={style.fKey}>transport:</span></td>
                      <td><span className={style.fKey}>传输:</span>或<span className={style.fKey}>网络协议:</span></td>
                    </tr>
                    <tr>
                      <td><span className={style.fKey}>country:</span></td>
                      <td><span className={style.fKey}>国家:</span></td>
                    </tr>
                    <tr>
                      <td><span className={style.fKey}>city:</span></td>
                      <td><span className={style.fKey}>城市:</span></td>
                    </tr>
                    <tr>
                      <td><span className={style.fKey}>module:</span></td>
                      <td><span className={style.fKey}>协议:</span>或<span className={style.fKey}>设备协议:</span></td>
                    </tr>
                    <tr>
                      <td><span className={style.fKey}>isp:</span></td>
                      <td><span className={style.fKey}>供应商:</span>或<span className={style.fKey}>服务提供商:</span></td>
                    </tr>
                    <tr>
                      <td><span className={style.fKey}>org:</span></td>
                      <td><span className={style.fKey}>企业:</span></td>
                    </tr>
                  </tbody>
                </table>
              <h3 className={style.fMainColor}>联合搜索</h3>
                <p>针对不同的多条件,我们提供了级联搜索。连接条件为"且"。</p>
                <div>
                  <p>例如，您想搜索<span className={style.fValue}>中国杭州的开放端口102的西门子设备</span></p>
                  <ul>
                    <li>
                    您可以这样输入:<span className={style.fKey}>country:CN city:Hangzhou port:102 Siemens</span>
                    </li>
                    <li>依照本地化原则,您也可以这样输入:<span className={style.fKey}>国家:CN 城市:Hangzhou 端口:102 Siemens</span></li>
                  </ul>
                </div>
                <p>
                  当然，"且"条件具有交换性，这表明您可以随意交换过滤器的顺序。
                </p>
              <h3 className={style.fMainColor}>高级搜索</h3>
              <p>针对某些特殊用户,我们提供了高级搜索功能。</p>
            </section>
          </main>
        </div>
        <Footer className={style.uFooter}/>
      </div>
      )
  }
} 