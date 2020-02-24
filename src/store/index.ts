import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import router from '@/router';

Vue.use(Vuex); // 把store 绑到 Vue.prototype

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    recordId: JSON.parse(localStorage.getItem('_recordIdMax') || '0'),
    tagList: [] as Tag[],
    tagId: JSON.parse(localStorage.getItem('_tagIdMax') || '4'),
    reset: [{id: 1, name: '衣'}, {id: 2, name: '食'}, {id: 3, name: '住'}, {id: 4, name: '行'}],
    foundTag: undefined as Tag | undefined
  },
  mutations: {
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
    // ---------------------------
    createTagId(state) {
      state.tagId++;
      localStorage.setItem('_tagIdMax', JSON.stringify(state.tagId));
    },
    fetchTags(state) {
      state.tagList = JSON.parse(localStorage.getItem('tagList') || JSON.stringify(state.reset));
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        alert('便签名重复');
      } else {
        store.commit('createTagId');
        state.tagList.push({id: state.tagId, name: name});
        store.commit('saveTags');
      }
    },
    saveTags(state) {
      localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    findTag(state, id: number) {
      state.foundTag = state.tagList.filter(tag => tag.id === id)[0];
    },
    removeTag(state, id: number) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        alert('删除失败');
      } else {
        state.tagList.splice(index, 1);
        store.commit('saveTags');
        router.back();
      }


    },
    updateTag(state, payload: { id: number; name: string }) {
      const {id, name} = payload;
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(name) === -1) {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTags');
        }
      }
    },
  }
});

store.commit('fetchRecords');
store.commit('fetchTags');

export default store;
