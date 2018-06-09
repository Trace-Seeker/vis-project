import React from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {connect} from 'react-redux';
import style from './Result.scss';
import {SearchAction, GroupAction} from '../../../actions';

import ResultItem from '../../../components/ResultItem/ResultItem';
import GroupList from '../../../components/GroupList/GroupList';

NProgress.configure({ trickleSpeed: 100 });

const Tip = ({title}) => (
  <div className={style.cSearchTip}>
    <h1>{title}</h1>
  </div>
)

class Result extends React.Component {

  constructor(props) {
    super(props);
    this.mapQueryCondition(props);
  }

  componentDidMount() {
    if (this.title !== '') {
      this.props.dispatchSearch(this.title, this.page, this.pageSize);
      this.props.dispatchGroups(this.title);
    }
  }

  componentWillUpdate(nextProps) {
    const nextTitle = nextProps.title;
    if (nextTitle !== this.title) {
      this.props.dispatchSearch(nextTitle, 1, this.pageSize);
      this.props.dispatchGroups(nextTitle);
    }
    this.mapQueryCondition(nextProps);
  }

  mapQueryCondition(props) {
    this.title = props.title;
    this.page = props.page;
    this.pageSize = props.pageSize;
  }

  renderTip(title) {
    return <Tip title={title}/>
  }  

  renderLoadingView() {
    NProgress.start();
    return this.renderTip("正在查询");
  }

  renderNotInputView() {
    return this.renderTip("请输入查询条件"); 
  }

  renderOverLoadingView() {
    return this.props.searchResult.result === false ? 
                this.renderSearchErrorView() : 
                this.renderSearchSuccessView(this.props.searchResult.result);
  }

  renderSearchErrorView() {
    NProgress.done();
    return this.renderTip("服务器开小差了，请重新查询 :（");
  }

  renderNoResultView() {
    return this.renderTip(`未找到和 ${this.title} 相关的结果 :（`);
  }

  renderSearchSuccessView(data) {
    NProgress.done();
    return data.result.length === 0 ? 
                this.renderNoResultView() : 
                this.renderHasResultView(data);
  }

  renderSearchResultView() {
    return this.props.searchResult.isLoading ? 
                this.renderLoadingView() : 
                this.renderOverLoadingView(); 
  }

  renderHasResultView(data) {
    window.scrollTo(0, 0);
    const totalNum = data.total;
    const pageSize = data.pageSize;
    const totalPage = totalNum % pageSize === 0 ? ~~(totalNum / pageSize) : ~~(totalNum / pageSize) + 1;
    return (
      <div>
        <aside className={style.gAside}>
          <GroupList data={this.props.groupResult.port || []} title="端口分布" condition="port"/>
          <GroupList data={this.props.groupResult.country || []} title="国家/地区分布" condition="countryName"/>
          <GroupList data={this.props.groupResult.org || []} title="企业分布" condition="org"/>
          <GroupList data={this.props.groupResult.isp || []} title="服务供应商分布" condition="isp"/>
          <GroupList data={this.props.groupResult.tags || []} title="设备类型分布" condition="tags"/>
        </aside>
        <div className={style.gMain}>
          <p className={style.mSearchTip}>{`搜索结果 ${data.total} 条，耗时: ${data.time} ms`}</p>
          {data.result.map((item, index) => <ResultItem data={item} key={index} match={this.props.match}/>)}
        </div>
        <div className={style.gBottom}>
          {this.page <= 1 ? '' : <button className={style.mButton} onClick={(e) => this.handlerPage(~~(this.page) - 1)}>上一页</button>}
          {this.page >= totalPage ? '' : <button className={style.mButton} onClick={(e) => this.handlerPage(~~(this.page) + 1)}>下一页</button>}
        </div>
      </div>
    )
  }

  handlerPage(nextPage) {
    window.scrollTo(0, 0);
    this.props.refreshLocation(this.title, nextPage, this.pageSize);
    this.props.dispatchSearch(this.title, nextPage, this.pageSize);
  }

  render() {
    return this.title === '' ? this.renderNotInputView() : this.renderSearchResultView();
  }
}

const mapStateToProps = (state) => ({
  searchResult: state.search,
  groupResult: state.group,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSearch: function(condition, page, pageSize) {
    dispatch(SearchAction(condition, page, pageSize));
  },
  dispatchGroup: function(condition, by, limit, order, pageSize) {
    dispatch(GroupAction({condition, by, limit, order}));
  },
  dispatchGroups: function(condition) {
    this.dispatchGroup(condition, 'port', 5, -1, 10);
    this.dispatchGroup(condition, 'tags', 5, -1, 10);
    this.dispatchGroup(condition, 'org', 5, -1, 10);
    this.dispatchGroup(condition, 'country', 7, -1, 10);
    this.dispatchGroup(condition, 'isp', 5, -1, 10);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);



