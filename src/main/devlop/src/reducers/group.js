const single = (state = [], action) => {
  switch (action.type) {
    case 'GROUP_START': 
      return state
    case 'GROUP_SUCCESS':
      return action.payload.buckets || []
    case 'GROUP_ERROR': 
      return []
    default: 
      return state
  }
};

const group = (state = {}, action) => {
  switch (action.type) {
    case 'GROUP_START':
    case 'GROUP_ERROR':
    case 'GROUP_SUCCESS':
      const by = action.by;
      return {
        ...state,
        [by]: single(state[by] || [], action)
      };
    default:
      return state;
  }
};

export default group;