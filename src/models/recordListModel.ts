const localStorageKeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  clone(data: RecordItem | RecordItem[]) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    this.data = JSON.parse(localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },
  save(data: RecordItem[]) {
    this.data = data;
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default recordListModel;