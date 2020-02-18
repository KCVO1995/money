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
    let message: message;
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {
      message = 'duplicated';
      return message;
    }
    const id = createId();
    this.data.push({id: id, name: name});
    this.save();
    message = 'success';
    return message;
  },
  update(id: number, name: string) {
    let message: message;
    const idList = this.data.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name);
      if (names.indexOf(name) === -1) {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.name = name;
        this.save();
        message = 'success';
        return message;
      } else {
        message = 'duplicated';
        return message;
      }

    } else {
      message = 'not found';
      return message;
    }
  },
  remove(id: number) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      return false
    }
    this.data.splice(index, 1);
    this.save();
    return true
  }

};

export default tagListModel;