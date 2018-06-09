let API_ROOT;
if (process.env.NODE_ENV === 'development') {
  API_ROOT = 'http://localhost:8888/backend/';
} else {
  API_ROOT = '/backend/';
}

export const SearchAPI = (condition, page, pageSize) => (
  fetch(`${API_ROOT}ics/query?q=${condition}&page=${page}&pageSize=${pageSize}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('search API error', res);
    })
)

export const GroupAPI = (condition, by, limit, order, page, pageSize) => (
  fetch(`${API_ROOT}ics/group2?by=${by}&limit=${limit || 7}&sort=${order || -1}&q=${condition}&page=${page || 1}&pageSize=${pageSize || 10}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('group API error', res);
    })
)

export const MapAPI = (condition) => (
  fetch(`${API_ROOT}map/coordinateArr?q=${condition}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('map API error', res);
    }).then(json => {
      let result = json.result[0];
      let data = [];
      for(let i = 0; i < result.length; i += 3) {
        let lat = result[i];
        let lng = result[i + 1];
        data.push({
          longitude: Number(lng), 
          latitude: Number(lat)
        });
      }
      return data;
    })
)

export const HostAPI = (condition) => (
  fetch(`${API_ROOT}ics/host?q=${condition}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('host API error', res);
    })
)




