import React from 'react';
import style from './NoMatch.scss';
import Header from '../../components/ResultHeader/Header';
import Footer from '../../components/ResultFooter/Footer';
import SearchBar from '../../components/ResultHeader/SearchBar';
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

  render() {
    return (
      <div className={style.cSearch}>
        <Header />
        <SearchBar 
            location={this.props.location}
            title={this.title}
            inputValueChange={(e) => this.handlerSearchBarValueChange(e)}
            submitClick={() => this.handlerSearchBarSubmitClick()}
            detail={false}/>
        <div className={style.cTip}>
          <h1>页面正在构建中...</h1>
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
  refreshLocation: function(condition, page, pageSize, pathname = props.location.pathname) {
    dispatch(push({
      pathname: pathname,
      search: `?q=${condition}&_=${Date.now()}&page=${page}&pageSize=${pageSize}`
    }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);




