const localStorageKeyName = 'tagList';
const tagListModel = {
  data: [] as string[],
  fetch() {
    this.data = JSON.parse(localStorage.getItem(localStorageKeyName) || '["衣", "食", "住", "行"]');
    return this.data;
  },
  save() {
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
  create(name: string) {
    if (this.data.indexOf(name) >= 0) {
      return 'duplicated';
    }
    this.data.push(name);
    this.save();
    return 'success';
  }

};

export default tagListModel;