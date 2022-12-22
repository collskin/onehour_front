import axios from 'axios'


export const axiosRequestInterceptor = async (config) => {

  const token = 1;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}




export const baseUrl = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
  headers: {
    'Content-Type': 'application/json',
  },
})
console.log(process.env.REACT_APP_API)

baseUrl.interceptors.request.use(axiosRequestInterceptor, (e) => Promise.reject(e))
