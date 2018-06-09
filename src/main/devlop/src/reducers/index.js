import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import query from './query';
import search from './search';
import group from './group';
import map from './map';
import host from './host';
import {
  total, 
  score, 
  system, 
  trend, 
  province, 
  port, 
  s_host,
  follow } from './situation';

export default combineReducers({
  query,
  router: routerReducer,
  search,
  group,
  map,
  host,
  s_total: total,
  s_score: score,
  s_system: system,
  s_trend: trend,
  s_province: province,
  s_port: port,
  s_host: s_host,
  s_follow: follow
});