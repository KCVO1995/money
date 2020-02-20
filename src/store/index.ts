import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex); // 把store 绑到 Vue.prototype

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
    reset: [{id: 1, name: '衣'}, {id: 2, name: '食'}, {id: 3, name: '住'}, {id: 4, name: '行'}]
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
    // ---------------------------
    fetchTags(state) {
      state.tagList = JSON.parse(localStorage.getItem('tagList') || JSON.stringify(state.reset));
    },
    createTag(state, name: string) {
      let message: message;
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        alert('便签名重复');
        message = 'duplicated';
        return message;
      }
      const id = createId();
      state.tagList.push({id: id, name: name});
      store.commit('saveTags');
      message = 'success';
      return message;
    },
    saveTags(state) {
      localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    findTag() {
      return undefined;
    },
  }
});

store.commit('fetchRecords');
store.commit('fetchTags');
console.log(store.state.recordList);

export default store;
