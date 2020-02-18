import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router'; // js的潜规则，如果路径是个目录，自动找里面的index
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';

Vue.config.productionTip = false;

// record store
window.recordList = recordListModel.fetch();
window.addRecord = (record: RecordItem) => {
  recordListModel.add(record);
};


// tag store
window.tagList = tagListModel.fetch();
window.findTag = (id: number) => {
  return window.tagList.filter(tag => tag.id === id)[0];
};
window.createTag = (name: string) => {
  const message = tagListModel.create(name);
  if (message === 'duplicated') {
    alert('便签名重复');
  }
};
window.removeTag = (id: number) => {
  return tagListModel.remove(id);
};
window.updateTag = (id: number, name: string) => {
  return tagListModel.update(id, name);
};

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
new Vue({
  router, // 引入路由
  store,
  render: h => h(App)
}).$mount('#app');
