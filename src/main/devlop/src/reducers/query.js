import ActionTypes from '../action-types/';
export default (state = '', action) => {
  switch (action.type) {
    case ActionTypes.main.Query:
      return action.payload;
    default:
      return '';
  }
}