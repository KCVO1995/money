import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import api from '@/api';
import {AxiosError, AxiosResponse} from 'axios';
import router from '@/router';

Vue.use(Vuex); // 把store 绑到 Vue.prototype

const store = new Vuex.Store({
  state: {
    currentUser: {} as User,
    recordList: [] as RecordItem[],
    recordId: JSON.parse(localStorage.getItem('_recordIdMax') || '0'),
    foundRecord: undefined as RecordItem | undefined,
    tagList: [] as Tag[],
  },
  mutations: {
    // --------------- uer
    saveUser(state, user) {
      state.currentUser = user;
    },
    logout(state) {
      document.cookie = 'token=';
      state.currentUser = {} as User;
    },
    // ----- record
    fetchRecords(state) {
      state.recordList = JSON.parse(localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record) {
      store.commit('createRecordId');
      record.id = state.recordId;
      record.createAt = new Date().toISOString();
      const newRecord = clone(record);
      state.recordList.push(newRecord);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    createRecordId(state) {
      state.recordId++;
      localStorage.setItem('_recordIdMax', JSON.stringify(state.recordId));
    },
    removeRecord(state, id: number) {
      let index = -1;
      for (let i = 0; i < state.recordList.length; i++) {
        if (state.recordList[i].id === id) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        alert('删除失败');
      } else {
        state.recordList.splice(index, 1);
        store.commit('saveRecords');
      }
    },
    // ----------------------- tag
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
      return api.record.create(data).then((res: AxiosResponse) => {
        console.log(res.data, 'res');
      }, (err: AxiosError) => {
        const {message} = err.response?.data;
        message && alert(message);
      });
    },
    updateRecord(context, data) {
      return api.record.update(data).then((res: AxiosResponse) => {
        console.log(res.data, 'res');
      }, (err: AxiosError) => {
        const {message} = err.response?.data;
        message && alert(message);
      });
    }
  }
});

store.commit('fetchRecords');

export default store;
