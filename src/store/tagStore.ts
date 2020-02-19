import tagListModel from '@/models/tagListModel';

export default {
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