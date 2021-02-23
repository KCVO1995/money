import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';
import {AxiosError, AxiosResponse} from 'axios';
import router from '@/router';

Vue.use(Vuex); // 把store 绑到 Vue.prototype

const store = new Vuex.Store({
  state: {
    currentUser: {} as User,
    tagList: [] as Tag[],
  },
  mutations: {
    // -------- user --------
    saveUser(state, user) {
      state.currentUser = user;
    },
    logout(state) {
      document.cookie = 'token=';
      state.currentUser = {} as User;
    },
    // -------- tag --------
    saveTags(state, tags) {
      state.tagList = tags;
    }
  },
  actions: {
    getUser(context) {
      return api.user.get().then((res: AxiosResponse) => {
        const {data} = res;
        context.commit('saveUser', data);
      }, (err: AxiosError) => {
        router.push('/login').then();
        const {message} = err.response?.data;
        message && alert('请登录');
      });
    },
    getTags(context) {
      return api.tag.get().then((res: AxiosResponse) => {
        const {data} = res;
        context.commit('saveTags', data);
      }, (err: AxiosError) => {
        const {message} = err.response?.data;
        message && alert(message);
      });
    },
    createTag(context, name) {
      return api.tag.create({name}).then(() => {
        context.dispatch('getTags').then();
      }, (err: AxiosError) => {
        const {message} = err.response?.data;
        message && alert(message);
      });
    },
    deleteTag(context, id) {
      return api.tag.delete(id).then(() => {
        context.dispatch('getTags').then();
      }, (err: AxiosError) => {
        const {message} = err.response?.data;
        message && alert(message);
      });
    },
    createRecord(context, data) {
      return api.record.create(data).catch((err: AxiosError) => {
        const {message} = err.response?.data;
        message && alert(message);
      });
    },
    updateRecord(context, data) {
      return api.record.update(data).catch((err: AxiosError) => {
        const {message} = err.response?.data;
        message && alert(message);
      });
    },
    deleteRecord(context, id) {
      return api.record.delete(id).catch((err: AxiosError) => {
        const {message} = err.response?.data;
        message && alert(message);
      });
    },
  }
});

export default store;
