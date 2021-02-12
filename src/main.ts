import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router'; // js的潜规则，如果路径是个目录，自动找里面的index
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import Top from '@/components/Top.vue';
import TagIcon from '@/components/TagIcon.vue';
import api from '@/api';

Vue.config.productionTip = false;


Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
Vue.component('Top', Top);
Vue.component('TagIcon', TagIcon);


Vue.use(api)
new Vue({
  router, // 引入路由
  store,  // 引入store到vue
  // 原型上
  render: h => h(App)
}).$mount('#app');


if (document.documentElement.clientWidth > 500) {
  window.alert('请使用手机打开页面，以保证浏览效果');
  const img = document.createElement('img');
  const layout = document.querySelector('.layout-wrapper') as HTMLDivElement;
  img.src = '/qrcode.png';
  img.style.position = 'absolute';
  img.style.left = '50%';
  img.style.top = '50%';
  img.style.transform = 'translate(-50%, -100%)';
  img.style.zIndex = '1';
  img.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)';
  if (layout) {
    layout.style.filter = 'blur(3px)';
  }
  document.body.appendChild(img);
}
