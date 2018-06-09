export default (state = {isLoading: true}, action) => {
  switch (action.type) {
    case 'SEARCH_START':
      return {
        ...state,
        condition: action.payload,
        isLoading: true
      }
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        result: action.payload,
        isLoading: false
      }
    case 'SEARCH_ERROR':
      return {
        ...state,
        result: false,
        isLoading: false
      }
    default:
      return state;
  }
}