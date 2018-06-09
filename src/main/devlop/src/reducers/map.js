export default (state = {
  isLoading: false,
  result: []
}, action) => {
  switch (action.type) {
    case 'MAP_START':
      return {
        ...state,
        isLoading: true,
        result: []
      }
    case 'MAP_SUCCESS':
      return {
        ...state,
        isLoading: false,
        result: action.payload
      }
    case 'MAP_ERROR':
      return {
        ...state,
        isLoading: false,
        result: -1
      }
    default:
      return state
  }
}