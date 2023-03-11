import axios from 'axios'

const baseURL = 'http://localhost:8000/api/'

// Handling server error
const errorHandler = (error) => {
  return error
}

export default {
  async execute (method, uri, data, params = {}) {
    const accessToken = localStorage.getItem('accessToken')

    const client = axios.create({
      baseURL: baseURL,
      json: true,
      withCredentials: false
    })

    client.interceptors.response.use(response => response, error => errorHandler(error))

    return client({
      method,
      url: uri,
      data,
      params: params,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(req => {
      return req.data
    })
  },
  
  getData (uri, params = {}) {
    return this.execute('get', uri, {}, params)
  },
  postData (uri, data) {
    return this.execute('post', uri, data)
  },
  putData (uri, data) {
    return this.execute('put', uri, data)
  },
  deleteData (uri) {
    return this.execute('delete', uri)
  }
}
