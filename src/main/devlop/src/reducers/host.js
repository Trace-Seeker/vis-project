export default (state = {
  isLoading: true,
  result: {}
}, action) => {
  switch (action.type) {
    case 'HOST_START':
      return {
        isLoading: true,
        result: {}
      }
    case 'HOST_SUCCESS':
      return {
        isLoading: false,
        result: action.payload
      }
    case 'HOST_ERROR':
      return {
        isLoading: false,
        result: -1
      }
    default:
      return state
  }
}