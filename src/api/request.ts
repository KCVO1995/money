import axios from 'axios';

// 创建 Axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true
});

// Request 拦截器
service.interceptors.request.use(oConfig => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
  if (token) {
    oConfig.headers.Authorization = 'Bearer ' + token;
  }

  return oConfig;
}, oError => {
  return Promise.reject(oError);
});

// Response 拦截器
service.interceptors.response.use(
  //TODO 如果 token 过期了
  oRes => {
    return oRes;
  },
  oError => {
    return Promise.reject(oError);
  }
);

export default service;
