import React from 'react';
import {connect} from 'react-redux';
import {MapAction} from '../../../actions';
import SearchMap from '../../../components/Map/SearchMap/Map';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

class Map extends React.Component {
  
  constructor(props) {
    super(props);
    this.mapQueryCondition(props);
  }

  componentDidMount() {
    this.props.dispatchMap(this.title);
  }

  componentWillUpdate(nextProps) {
    const nextTitle = nextProps.title;
    if (nextTitle !== this.title) {
      this.props.dispatchMap(nextTitle);
    }
    this.mapQueryCondition(nextProps);
  }

  mapQueryCondition(props) {
    this.title = props.title;
    this.page = props.page;
    this.pageSize = props.pageSize;
  }

  render() {
    if (this.props.mapResult.isLoading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
    return (
      <div>
        <SearchMap data={this.props.mapResult} 
             size={2000} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.router.location,
  mapResult: state.map
});

const mapDispatchToProps = (dispatch) => ({
  dispatchMap: function(condition) {
    dispatch(MapAction(condition));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);