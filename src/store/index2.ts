import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const store = {
  // record store
  recordList: recordListModel.fetch(),
  addRecord(record: RecordItem) {
    recordListModel.add(record);
  },
  // tag store
  tagList: tagListModel.fetch(),
  findTag(id: number) {
    return this.tagList.filter(tag => tag.id === id)[0];
  },
  createTag(name: string) {
    const message = tagListModel.create(name);
    if (message === 'duplicated') {
      alert('便签名重复');
    }
  },
  removeTag(id: number) {
    return tagListModel.remove(id);
  },
  updateTag(id: number, name: string) {
    return tagListModel.update(id, name);
  }
};

export default store;