import axios from 'axios'

// 创建 Axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true
})

// Request 拦截器
service.interceptors.request.use(oConfig => {

  return oConfig
}, oError => {
  return Promise.reject(oError)
})

// Response 拦截器
service.interceptors.response.use(
  oRes => {
    return oRes
  },
  oError => {
    return Promise.reject(oError)
  }
)

export default service
