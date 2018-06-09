import {SearchAPI, GroupAPI, MapAPI, HostAPI} from '../api';
import {TotalAPI, ScoreAPI, SystemAPI, TrendAPI, ProvinceAPI, PortAPI, HostAPI as SituationHostAPI, FollowAPI} from '../api/situation';

const SearchStart = (condition) => ({
  type: 'SEARCH_START',
  payload: condition
});

const SearchSuccess = (data) => ({
  type: 'SEARCH_SUCCESS',
  payload: data
});

const SearchError = () => ({
  type: 'SEARCH_ERROR',
});

const GroupStart = (by) => ({
  type: 'GROUP_START',
  by
});

const GroupSuccess = (by, result) => ({
  type: 'GROUP_SUCCESS',
  by,
  payload: result
});

const GroupError = (by) => ({
  type: 'GROUP_ERROR',
  by
});

const MapStart = (condition) => ({
  type: 'MAP_START',
  condition
});

const MapSuccess = (condition, payload) => ({
  type: 'MAP_SUCCESS',
  condition,
  payload
});

const MapError = (condition) => ({
  type: 'MAP_ERROR',
  condition
});

const HostStart = (condition) => ({
  type: 'HOST_START',
  condition
});

const HostSuccess = (condition, payload) => ({
  type: 'HOST_SUCCESS',
  condition,
  payload
});

const HostError = (condition) => ({
  type: 'HOST_ERROR',
  condition
});

const SituationTotalStart = (condition) => ({
  type: 'TOTAL_START',
  condition
})

const SituationTotalSuccess = (result) => ({
  type: 'TOTAL_SUCCESS',
  payload: result
})

const SituationTotalError = () => ({
  type: 'TOTAL_ERROR'
})

const SituationScoreStart = (condition) => ({
  type: 'SCORE_START',
  condition
})

const SituationScoreSuccess = (result) => ({
  type: 'SCORE_SUCCESS',
  payload: result
})

const SituationScoreError = () => ({
  type: 'SCORE_ERROR'
})

const SituationSystemStart = () => ({
  type: 'SYSTEM_START'
})

const SituationSystemSuccess = (result) => ({
  type: 'SYSTEM_SUCCESS',
  payload: result
})

const SituationSystemError = () => ({
  type: 'SYSTEM_ERROR'
})

const SituationTrendStart = () => ({
  type: 'TREND_START'
})

const SituationTrendSuccess = (result) => ({
  type: 'TREND_SUCCESS',
  payload: result
})

const SituationTrendError = () => ({
  type: 'TREND_ERROR'
})

const SituationProvinceStart = () => ({
  type: 'PROVINCE_START'
})

const SituationProvinceSuccess = (result) => ({
  type: 'PROVINCE_SUCCESS',
  payload: result
})

const SituationProvinceError = () => ({
  type: 'PROVINCE_ERROR'
})

const SituationPortStart = (condition) => ({
  type: 'SPORT_START',
  condition
})

const SituationPortSuccess = (result) => ({
  type: 'SPORT_SUCCESS',
  payload: result
})

const SituationPortError = () => ({
  type: 'SPORT_ERROR'
})

const SituationHostStart = () => ({
  type: 'SHOST_START'
})

const SituationHostSuccess = (result) => ({
  type: 'SHOST_SUCCESS',
  payload: result
})

const SituationHostError = () => ({
  type: 'SHOST_ERROR'
})

const SituationFollowStart = () => ({
  type: 'FOLLOW_START'
})

const SituationFollowSuccess = (result) => ({
  type: 'FOLLOW_SUCCESS',
  payload: result
})

const SituationFollowError = () => ({
  type: 'FOLLOW_ERROR'
})







export const SearchAction = (condition, page, pageSize) => (dispatch) => {
  dispatch(SearchStart({condition, page, pageSize}));
  SearchAPI(condition, page, pageSize)
     .then(json => dispatch(SearchSuccess(json)))
     .catch(error => dispatch(SearchError()));
};

export const GroupAction = ({condition, by, limit, order, page, pageSize}) => (dispatch) => {
  limit = limit || 10;
  order = order || -1;
  page = page || 1;
  pageSize = pageSize || 10;
  dispatch(GroupStart(by));
  GroupAPI(condition, by, limit, order, page, pageSize)
    .then(json => dispatch(GroupSuccess(by, json)))
    .catch(error => dispatch(GroupError(by)));
};

export const MapAction = (condition) => (dispatch) => {
  dispatch(MapStart(condition));
  MapAPI(condition)
    .then(json => dispatch(MapSuccess(condition, json)))
    .catch(error => dispatch(MapError(condition)));
}

export const HostAction = (condition) => (dispatch) => {
  dispatch(HostStart(condition));
  HostAPI(condition)
    .then(json => dispatch(HostSuccess(condition, json)))
    .catch(error => dispatch(HostError(condition)));
}

export const SituationTotalAction = (condition) => (dispatch) => {
  dispatch(SituationTotalStart(condition));
  TotalAPI(condition)
      .then(json => dispatch(SituationTotalSuccess(json)))
      .catch( error => dispatch(SituationTotalError()));
}

export const SituationScoreAction = (condition) => (dispatch) => {
  dispatch(SituationScoreStart(condition));
  ScoreAPI(condition)
      .then(json => dispatch(SituationScoreSuccess(json)))
      .catch( error => dispatch(SituationScoreError()));
}

export const SituationSystemAction = () => (dispatch) => {
  dispatch(SituationSystemStart());
  SystemAPI()
      .then(json => dispatch(SituationSystemSuccess(json)))
      .catch( error => dispatch(SituationSystemError()));
}

export const SituationTrendAction = () => (dispatch) => {
  dispatch(SituationTrendStart());
  TrendAPI()
      .then(json => dispatch(SituationTrendSuccess(json)))
      .catch( error => dispatch(SituationTrendError()));
}

export const SituationProvinceAction = () => (dispatch) => {
  dispatch(SituationProvinceStart());
  ProvinceAPI()
      .then(json => dispatch(SituationProvinceSuccess(json)))
      .catch( error => dispatch(SituationProvinceError()));
}

export const SituationPortAction = (condition) => (dispatch) => {
  dispatch(SituationPortStart(condition));
  PortAPI(condition)
      .then(json => dispatch(SituationPortSuccess(json)))
      .catch( error => dispatch(SituationPortError()));
}

export const SituationHostAction = () => (dispatch) => {
  dispatch(SituationHostStart());
  SituationHostAPI()
      .then(json => dispatch(SituationHostSuccess(json)))
      .catch( error => dispatch(SituationHostError()));
}

export const SituationFollowAction = () => (dispatch) => {
  dispatch(SituationFollowStart());
  FollowAPI()
      .then(json => dispatch(SituationFollowSuccess(json)))
      .catch( error => dispatch(SituationFollowError()));
}
