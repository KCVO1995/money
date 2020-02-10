import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router'; // js的潜规则，如果路径是个目录，自动找里面的index
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router, // 引入路由
  store,
  render: h => h(App)
}).$mount('#app');
