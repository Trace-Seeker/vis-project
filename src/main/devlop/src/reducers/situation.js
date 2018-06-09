export const total = (state = {
  condition: 'all',
  result: {
    online: [],
    offline: []
  }
}, action) => {
  switch (action.type) {
    case 'TOTAL_START': 
      return {
        ...state,
        condition: action.condition
      }
    case 'TOTAL_SUCCESS': 
      return {
        ...state,
        result: action.payload
      }
    default:
      return state
  }
}

export const score = (state = {
  condition: 'all',
  result: {
    score: {}
  }
}, action) => {
  switch (action.type) {
    case 'SCORE_START': 
      return {
        ...state,
        condition: action.condition
      }
    case 'SCORE_SUCCESS': 
      return {
        ...state,
        result: action.payload
      }
    default:
      return state
  }
}

export const system = (state = {
  result: []
}, action) => {
  switch (action.type) {
    case 'SYSTEM_START': 
      return {
        result: []
      }
    case 'SYSTEM_SUCCESS': 
      return {
        result: action.payload
      }
    default:
      return state
  }
}

export const trend = (state = {
  result: []
}, action) => {
  switch (action.type) {
    case 'TREND_START': 
      return {
        result: []
      }
    case 'TREND_SUCCESS': 
      return {
        result: action.payload
      }
    default:
      return state
  }
}

export const province = (state = {
  result: []
}, action) => {
  switch (action.type) {
    case 'PROVINCE_START': 
      return {
        result: []
      }
    case 'PROVINCE_SUCCESS': 
      return {
        result: action.payload
      }
    default:
      return state
  }
}

export const port = (state = {
  condition: '',
  result: []
}, action) => {
  switch (action.type) {
    case 'SPORT_START': 
      return {
        condition: action.condition,
        result: []
      }
    case 'SPORT_SUCCESS': 
      return {
        ...state,
        result: action.payload
      }
    default:
      return state
  }
}

export const s_host = (state = {
  result: []
}, action) => {
  switch (action.type) {
    case 'SHOST_START': 
      return {
        result: []
      }
    case 'SHOST_SUCCESS': 
      return {
        result: action.payload
      }
    default:
      return state
  }
}

export const follow = (state = {
  result: []
}, action) => {
  switch (action.type) {
    case 'FOLLOW_START': 
      return {
        result: []
      }
    case 'FOLLOW_SUCCESS': 
      return {
        result: action.payload
      }
    default:
      return state
  }
}