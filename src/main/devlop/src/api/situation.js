let SITUATION_ROOT;
if (process.env.NODE_ENV === 'development') {
  SITUATION_ROOT = 'http://localhost:8888/backend/situation/';
} else {
  SITUATION_ROOT = '/backend/situation/';
}

export const TotalAPI = (condition) => (
  fetch(`${SITUATION_ROOT}map/area?q=${condition}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('situation API error', res);
    })
)

export const ScoreAPI = (condition) => (
  fetch(`${SITUATION_ROOT}map/score?q=${condition}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('situation API error', res);
    })
)

export const SystemAPI = () => (
  fetch(`${SITUATION_ROOT}system/latest`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('situation API error', res);
    })
)

export const TrendAPI = () => (
  fetch(`${SITUATION_ROOT}map/trend`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('situation API error', res);
    })
)

export const ProvinceAPI = () => (
  fetch(`${SITUATION_ROOT}map/group/area`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('situation API error', res);
    })
)

export const PortAPI = (condition) => (
  fetch(`${SITUATION_ROOT}map/group/port?q=${condition}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('situation API error', res);
    })
)

export const HostAPI = () => (
  fetch(`${SITUATION_ROOT}map/track`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('situation API error', res);
    })
)

export const FollowAPI = () => (
  fetch(`${SITUATION_ROOT}map/all`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('situation API error', res);
    })
)