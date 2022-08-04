import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:8080/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
    }
})
instance.interceptors.response.use(
    function (data) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return data
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error.response.data.message)
    }
  )

export default  instance