const localStorageKeyName = 'tagList';
type Tag = {
  id: string;
  name: string;
}
const tagListModel = {
  reset: [{id: '衣', name: '衣'}, {id: '食', name: '食'}, {id: '住', name: '住'}, {id: '行', name: '行'}],
  data: [] as Tag[],
  fetch() {
    this.data = JSON.parse(localStorage.getItem(localStorageKeyName) || JSON.stringify(this.reset));
    return this.data;
  },
  save() {
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
  create(name: string) {
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {
      return 'duplicated';
    }
    this.data.push({id: name, name: name});
    this.save();
    return 'success';
  }

};

export default tagListModel;