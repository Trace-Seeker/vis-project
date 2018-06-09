import React from 'react';
import style from './Module.scss';
import Header from '../../components/ResultHeader/Header';
import SearchBar from '../../components/ResultHeader/SearchBar';
import Footer from '../../components/ResultFooter/Footer';
import URL from '../../link';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

const mapStateToProps = (state) => ({
  location: state.router.location
});

const mapDispatchToProps = (dispatch, props) => ({
  refreshLocation: function(condition, page, pageSize, pathname = props.location.pathname) {
    dispatch(push({
      location: URL.ShiChuang,
      pathname: pathname,
      search: `?q=${condition}&_=${Date.now()}&page=${page}&pageSize=${pageSize}`
    }));
  }
});

class Module extends React.Component {
  constructor(props) {
    super(props);
    this.searchBarInputValue = '';
    this.title = '';
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handlerSearchBarValueChange(e) {
    this.searchBarInputValue = e.target.value;
  }

  handlerSearchBarSubmitClick() {
    this.props.refreshLocation(this.searchBarInputValue, 1, 10, URL.ShiChuang);
  }

  render() {
    return (
      <div className={style.cModule}>
        <Header />
        <SearchBar 
            location={this.props.location}
            title={this.title}
            inputValueChange={(e) => this.handlerSearchBarValueChange(e)}
            submitClick={() => this.handlerSearchBarSubmitClick()}
            detail={false}/>
        <div className={style.container}>
           <div className={style.section}>
               <div className={style.title}>
                  <span>目前可供搜索的协议</span>
               </div>
               <div className={style.combination}>
                 <span>Siemens S7</span>
                 <hr />
                 <div className={style.block}>
                     <span>TCP</span>
                     <span>102</span>
                 </div>
                 <div className={style.port}>
                     <a href="">port:102</a>
                 </div>
               </div>
               <div className={style.combination}>
                <span>Modbus</span>
                <hr />
                <div className={style.block}>
                  <span>TCP</span>
                  <span>502</span>
                </div>
                <div className={style.port}>
                  <a href="">port:502</a>
                </div>
               </div>
               <div className={style.combination}>
                   <span>IEC 60870-5-104</span>
                   <hr />
                   <div className={style.block}>
                       <span>TCP</span>
                       <span>2404</span>
                   </div>
                   <div className={style.port}>
                       <a href="">port:2404</a>
                   </div>
               </div>
               <div className={style.combination}>
                   <span>DNP3</span>
                   <hr />
                   <div className={style.block}>
                       <span>TCP</span>
                       <span>20000</span>
                   </div>
                   <div className={style.port}>
                       <a href="">port:20000</a>
                   </div>
               </div>
               <div className={style.combination}>
                   <span>EtherNet/IP</span>
                   <hr />
                   <div className={style.block}>
                       <span>TCP</span>
                       <span>44818</span>
                   </div>
                   <div className={style.port}>
                       <a href="">port:44818</a>
                   </div>
               </div>
               <div className={style.combination}>
                   <span>BACnet</span>
                   <hr />
                   <div className={style.block}>
                       <span>TCP</span>
                       <span>47808</span>
                   </div>
                   <div className={style.port}>
                       <a href="">port:47808</a>
                   </div>
               </div>
               <div className={style.combination}>
                   <span>Tridium Nigara Fox</span>
                   <hr />
                   <div className={style.block}>
                       <span>TCP</span>
                       <span>1911</span>
                   </div>
                   <div className={style.port}>
                       <a href="">port:1911</a>
                   </div>
               </div>
               <div className={style.combination}>
                   <span>Crimson V3</span>
                   <hr />
                   <div className={style.block}>
                       <span>TCP</span>
                       <span>789</span>
                   </div>
                   <div className={style.port}>
                       <a href="">port:789</a>
                   </div>
               </div>
               <div className={style.combination}>
                   <span>OMRON FINS</span>
                   <hr />
                   <div className={style.block}>
                       <span>TCP</span>
                       <span>9600</span>
                   </div>
                   <div className={style.port}>
                       <a href="">port:9600</a>
                   </div>
               </div>
               <div className={style.combination}>
                   <span>PCWorx</span>
                   <hr />
                   <div className={style.block}>
                       <span>TCP</span>
                       <span>1962</span>
                   </div>
                   <div className={style.port}>
                       <a href="">port:1962</a>
                   </div>
               </div>
               <div className={style.combination}>
                   <span>ProConOs</span>
                   <hr />
                   <div className={style.block}>
                       <span>TCP</span>
                       <span>20547</span>
                   </div>
                   <div className={style.port}>
                       <a href="">port:20547</a>
                   </div>
               </div>
               <div className={style.combination}>
                   <span>MELSEC-Q</span>
                   <hr />
                   <div className={style.block}>
                       <span>TCP</span>
                       <span>5007</span>
                   </div>
                   <div className={style.port}>
                       <a href="">port:5007</a>
                   </div>
               </div>
               <div className={style.combination}>
                   <span>GE-SRTP</span>
                   <hr />
                   <div className={style.block}>
                       <span>TCP</span>
                       <span>18245</span>
                   </div>
                   <div className={style.port}>
                       <a href="">port:18245</a>
                   </div>
               </div>
               <div className={style.combination}>
                   <span>HART-IP</span>
                   <hr />
                   <div className={style.block}>
                       <span>TCP</span>
                       <span>5094</span>
                   </div>
                   <div className={style.port}>
                       <a href="">port:5094</a>
                   </div>
               </div>
               <div className={style.combination}>
                  <span>CODESYS</span>
                  <hr />
                  <div className={style.block}>
                    <span>TCP</span>
                    <span>2455</span>
                  </div>
                  <div className={style.port}>
                    <a href="">port:2455</a>
                  </div>
               </div>
           </div>

          <div className={style.section}>
              <div className={style.title}>
                  <span>支持的产品</span>
              </div>
              <table className={style.table}>
                  <thead>
                  <tr>
                      <th>Vendor</th>
                      <th>Model</th>
                      <th>Version</th>
                      <th>Dork</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td>Adcon Telemetry</td>
                      <td>A850 Telemetry Gateway</td>
                      <td>Generic</td>
                      <td>
                          <a>A850 Telemetry Gateway</a>
                      </td>
                  </tr>
                  <tr>
                      <td>ABB</td>
                      <td>RTU500</td>
                      <td>RTU560</td>
                      <td>
                          <a>ABB RTU560</a>
                      </td>
                  </tr>
                  <tr>
                      <td>ABB</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>ABB Webmodule</a>
                      </td>
                  </tr>
                  <tr>
                      <td>ACKP</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>AKCP Embedded Web Server</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Allen-Bradley</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>Allen-Bradley</a>
                      </td>
                  </tr>
                  <tr>
                      <td>BroadWeb</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>BroadWeb</a>
                      </td>
                  </tr>
                  <tr>
                      <td>General Electric</td>
                      <td>Cimplicity</td>
                      <td>Generic</td>
                      <td>
                          <a>CIMPLICITY-HttpSvr</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Cimetrics</td>
                      <td>Eplus - B/IP to B/WS Gateway Firewall</td>
                      <td>Generic</td>
                      <td>
                          <a>Cimetrics Eplus Web Server</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schneider Electric</td>
                      <td>CitectSCADA</td>
                      <td>Generic</td>
                      <td>
                          <a>CitectSCADA</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schneider Electric</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>ClearSCADA</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Delta Controls</td>
                      <td>enteliTOUCH</td>
                      <td>Generic</td>
                      <td>
                          <a>DELTA enteliTOUCH</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Electro Industries GaugeTech</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>EIG Embedded Web Server</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Elster EnergyICT</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>EnergyICT</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>GoAhead-Webs InitialPage.asp</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Siemens</td>
                      <td>Simatic HMI</td>
                      <td>XP277</td>
                      <td>
                          <a>HMI, XP277</a>
                      </td>
                  </tr>
                  <tr>
                      <td>HMS</td>
                      <td>EtherNet/IP / Modbus-TCP Interface</td>
                      <td>Generic</td>
                      <td>
                          <a>HMS AnyBus-S WebServer</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Beck IPC</td>
                      <td>IPC@CHIP</td>
                      <td>Generic</td>
                      <td>
                          <a>IPC@CHIP</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Clorius Controls</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>ISC SCADA Service HTTPserv:00001</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>Modbus Bridge</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>ModbusGW</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Rockwell Automation</td>
                      <td>Micrologix</td>
                      <td>Generic</td>
                      <td>
                          <a>Micrologix</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>NET ARM Web Server/1.00</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schneider Electric</td>
                      <td>Modicon</td>
                      <td>M340</td>
                      <td>
                          <a>Modicon M340</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Moxa</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>MoxaHttp</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schneider Electric</td>
                      <td>Modicon</td>
                      <td>M340</td>
                      <td>
                          <a>Modicon M340 CPU</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>PLC</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Siemens</td>
                      <td>Simatic S7</td>
                      <td>Generic</td>
                      <td>
                          <a>Portal0000.htm</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Tridium</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>Niagara Web Server</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Novatech</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>NovaTech HTTPD</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schneider Electric</td>
                      <td>PowerLogic ION</td>
                      <td>Generic</td>
                      <td>
                          <a>Power Measurement Ltd</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schneider Electric</td>
                      <td>PowerLogic PM</td>
                      <td>PM800</td>
                      <td>
                          <a>PowerLogic PM800</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>Powerlink</a>
                      </td>
                  </tr>
                  <tr>
                      <td>General Electric</td>
                      <td>Proficy</td>
                      <td>Generic</td>
                      <td>
                          <a>ProficyPortal</a>
                      </td>
                  </tr>
                  <tr>
                      <td>RTS Services</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>RTS SCADA Server</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Reliance</td>
                      <td>Reliance 4 SCADA/HMI system</td>
                      <td>Generic</td>
                      <td>
                          <a>Reliance 4 Control Server</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Rockwell Automation</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>Rockwell Automation</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Siemens</td>
                      <td>Simatic S7</td>
                      <td>S7-200</td>
                      <td>
                          <a>S7-200</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Siemens</td>
                      <td>Simatic S7</td>
                      <td>S7-300</td>
                      <td>
                          <a>S7-300</a>
                      </td>
                  </tr>
                  <tr>
                      <td>SAP</td>
                      <td>NetWeaver Application Server</td>
                      <td>Generic</td>
                      <td>
                          <a>SAP NetWeaver Application Server</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>SCADA</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Siemens</td>
                      <td>Simatic HMI</td>
                      <td>Generic</td>
                      <td>
                          <a>SIMATIC HMI</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Siemens</td>
                      <td>Simatic NET</td>
                      <td>Generic</td>
                      <td>
                          <a>SIMATIC NET</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>SLC5</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Siemens</td>
                      <td>Scalance S</td>
                      <td>Generic</td>
                      <td>
                          <a>Scalance S</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Siemens</td>
                      <td>Scalance W</td>
                      <td>Generic</td>
                      <td>
                          <a>Scalance W</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schleifenbauer</td>
                      <td>SPbus gateway</td>
                      <td>Generic</td>
                      <td>
                          <a>Schleifenbauer SPbus gateway</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Siemens</td>
                      <td>Scalance X</td>
                      <td>Generic</td>
                      <td>
                          <a>Scalance X</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schneider Electric</td>
                      <td>PowerLogic ECC</td>
                      <td>ECC21</td>
                      <td>
                          <a>Schneider Electric ECC21</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schneider Electric</td>
                      <td>PowerLogic EGX</td>
                      <td>EGX100MG</td>
                      <td>
                          <a>Schneider Electric EGX100MG</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schneider Electric</td>
                      <td>PowerLogic PM</td>
                      <td>PM820SD</td>
                      <td>
                          <a>Schneider Electric PM820SD</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schneider Electric</td>
                      <td>PowerLogic PM</td>
                      <td>PM870SD</td>
                      <td>
                          <a>Schneider Electric PM870SD</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schneider Electric</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>Schneider-WEB</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Siemens</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>Siemens</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Allen-Bradley</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>Series C Revision</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Siemens</td>
                      <td>Simatic HMI</td>
                      <td>Generic</td>
                      <td>
                          <a>Simatic</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Siemens</td>
                      <td>Simatic S7</td>
                      <td>Generic</td>
                      <td>
                          <a>Simatic S7</a>
                      </td>
                  </tr>
                  <tr>
                      <td>SoftPLC</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>SoftPLC</a>
                      </td>
                  </tr>
                  <tr>
                      <td>SpiderControl</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>SpiderControl</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Stulz</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>Stulz GmbH Klimatechnik</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schneider Electric</td>
                      <td>Tac XENTA 913</td>
                      <td>Generic</td>
                      <td>
                          <a>TAC/Xenta</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schneider Electric</td>
                      <td>Modicon</td>
                      <td>Generic</td>
                      <td>
                          <a>TELEMECANIQUE BMX</a>
                      </td>
                  </tr>
                  <tr>
                      <td>THUS</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>THUS plc</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schneider Electric</td>
                      <td>Tac XENTA 913</td>
                      <td>Generic</td>
                      <td>
                          <a>TAC XENTA913</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Wind River</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>VxWorks</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Wago</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>WAGO</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Codesys</td>
                      <td>WebVisu</td>
                      <td>Generic</td>
                      <td>
                          <a>Webvisu</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Siemens</td>
                      <td>Simatic HMI</td>
                      <td>Generic</td>
                      <td>
                          <a>Welcome to the Windows CE Telnet Service on HMI_Panel</a>
                      </td>
                  </tr>
                  <tr>
                      <td>NRG Systems</td>
                      <td>WindCube</td>
                      <td>Generic</td>
                      <td>
                          <a>WindWeb</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Wind River</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>WindRiver-WebServer</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Adcon Telemetry</td>
                      <td>addUPI-OPC Server</td>
                      <td>Generic</td>
                      <td>
                          <a>addUPI Server</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Rabbit</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>Z-World Rabbit</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Elster EnergyICT</td>
                      <td>eiPortal</td>
                      <td>Generic</td>
                      <td>
                          <a>eiPortal</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Echelon</td>
                      <td>i.LON 600</td>
                      <td>Generic</td>
                      <td>
                          <a>i.LON</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Moxa</td>
                      <td>ioLogik</td>
                      <td>Generic</td>
                      <td>
                          <a>ioLogik Web Server</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Tridium</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>niagara_audit</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Tridium</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>niagara_audit -login</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>openerp server:CherryPy</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schneider Electric</td>
                      <td>PowerLogic ION</td>
                      <td>Generic</td>
                      <td>
                          <a>Meter ION</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Trend</td>
                      <td>IQ3xcite</td>
                      <td>Generic</td>
                      <td>
                          <a>Server: IQ3</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Fujitsu</td>
                      <td>ServerView</td>
                      <td>Generic</td>
                      <td>
                          <a>serverview</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Schneider Electric</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>PowerLogic</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Somfy</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>title:Somfy</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Adcon Telemetry</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>title:adcon</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Rabbit</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>phasefale Z-World Rabbit</a>
                      </td>
                  </tr>
                  <tr>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>Generic</td>
                      <td>
                          <a>webSCADA-Modbus</a>
                      </td>
                  </tr>
                  </tbody>
              </table>
          </div>
      </div>
      <Footer />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Module);



