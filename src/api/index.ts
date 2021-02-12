import user from './v1/user'
import _Vue from 'vue'

const api = {
  install(Vue: typeof _Vue) {
    Vue.prototype.$api = api
  },
  user
}

export default api
