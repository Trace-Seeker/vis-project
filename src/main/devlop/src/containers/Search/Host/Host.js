import React from 'react';
import {connect} from 'react-redux';
import {HostAction} from '../../../actions';

import PortBox from '../../../components/HostPort/PortBox';
import PortDetail from '../../../components/HostPort/PortDetail';
import Split from '../../../components/Split/Split';
import Map from '../../../components/Map/HostMap/Map';
import Util from '../../../util';
import HostItemList from '../../../components/HostItem/ItemList';

import style from './Host.scss';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ trickleSpeed: 100 });

class Host extends React.Component {

  constructor(props) {
    super(props);
    this.mapQueryCondition(props);
  }

  componentDidMount() {
    this.props.dispatchHost(this.title);
  }

  mapQueryCondition(props) {
    this.title = Util.getUrlParam(props.location.search, 'q') || '';
  }

  render() {
    let view;
    if (this.props.host.isLoading) {
      NProgress.start();
      view = '';
    } else {
      NProgress.done();
      const data = this.props.host.result.result;
      const result = data[0];
      const ip = result.ip_str_row;
      const tags = result.tags === 'ics' ? 'Industrial Control System' : result.tags || '';
      const location = {
        longitude: result.location.longitude,
        latitude: result.location.latitude
      }
      view = (
        <div>
          <Map location={location} size={6}/>
          <div className={style.gContainer}>
            <div className={style.gLeft}>
              <p>
                <span className={style.uIp}>{ip}</span>
                <span className={style.uTags}>{tags}</span>
              </p>
              <Split />
              <HostItemList condition={result} />
            </div>
            <div className={style.gRight}>
              <div className={style.gBox}>
                <p><span className={style.uTitle}>开放端口</span></p>
                <Split />
                <div>
                  {data.map((d) => (<PortBox title={d.port} key={d.port}/>))}
                </div>
              </div>
              <div className={style.gBox}>
                <p><span className={style.uTitle}>服务</span></p>
                <Split />
                {data.map((d) => (<PortDetail data={d} key={d.port}/>))}
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        {view}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  location: state.router.location,
  host: state.host
});

const mapDispatchToProps = (dispatch) => ({
  dispatchHost: function(condition) {
    dispatch(HostAction(condition));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Host);