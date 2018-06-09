import React from 'react';
import style from './Search.scss';
import Header from '../../components/ResultHeader/Header';
import Footer from '../../components/ResultFooter/Footer';
import SearchBar from '../../components/ResultHeader/SearchBar';
import Result from './Result/Result';
import Host from './Host/Host';
import Map from './Map/Map';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Util from '../../util';
import URL from '../../link';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.mapQueryCondition(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUpdate(nextProps) {
    window.scrollTo(0, 0);
    this.mapQueryCondition(nextProps);
  }

  mapQueryCondition(props) {
    this.title = Util.getUrlParam(props.location.search, 'q') || '';
    this.page = Util.getUrlParam(props.location.search, 'page') || 1;
    this.pageSize = Util.getUrlParam(props.location.search, 'pageSize') || 10;
    this.searchBarInputValue = this.title;
  }

  handlerSearchBarValueChange(e) {
    this.searchBarInputValue = e.target.value;
  }

  handlerSearchBarSubmitClick() {
    this.props.refreshLocation( this.searchBarInputValue, 1, this.pageSize, URL.ShiChuang);
  }

  renderLayout() {
    return (
      <div>
        <Header />
        <SearchBar 
            location={this.props.location}
            title={this.title}
            inputValueChange={(e) => this.handlerSearchBarValueChange(e)}
            submitClick={() => this.handlerSearchBarSubmitClick()}
            detail={this.title !== ''}/>
      </div>
    )
  }

  render() {
    return (
      <div className={style.cSearch}>
        <Route component={this.renderLayout.bind(this)} />
        <Switch>
          <Route exact path='/search' render={() => <Result title={this.title} page={this.page} pageSize={this.pageSize} refreshLocation={this.props.refreshLocation.bind(this)}/>}/>
          <Route path='/search/map' render={() => <Map title={this.title} refreshLocation={this.props.refreshLocation.bind(this)}/>}/>
          <Route path='/search/host' render={() => <Host title={this.title} refreshLocation={this.props.refreshLocation.bind(this)}/>}/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Search);




