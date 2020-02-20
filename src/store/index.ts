import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex); // 把store 绑到 Vue.prototype

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[]
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record) {
      record.createAt = new Date();
      const newRecord = clone(record);
      state.recordList.push(newRecord);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    createTag() {
      return undefined;
    },
    findTag() {
      return undefined;
    },
  }
});

store.commit('fetchRecords');
console.log(store.state.recordList);

export default store;
