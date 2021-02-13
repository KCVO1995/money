import user from './v1/user'
import tag from './v1/tag'
import _Vue from 'vue'

const api = {
  install(Vue: typeof _Vue) {
    Vue.prototype.$api = api
  },
  user,
  tag
}

export default api
