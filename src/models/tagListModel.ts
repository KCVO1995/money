import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';

const tagListModel = {
  reset: [{id: 1, name: '衣'}, {id: 2, name: '食'}, {id: 3, name: '住'}, {id: 4, name: '行'}],
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
    const id = createId();
    this.data.push({id: id, name: name});
    this.save();
    return 'success';
  },
  update(id: number, name: string) {
    const idList = this.data.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name);
      if (names.indexOf(name) === -1) {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.name = name;
        this.save();
        return 'success';
      } else {
        return 'duplicate';
      }

    } else {
      return 'not found';
    }
  }

};

export default tagListModel;