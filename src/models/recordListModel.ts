import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  add(record: RecordItem) {
    record.createAt = new Date();
    const newRecord = clone(record);
    this.data.push(newRecord);
  },
  fetch() {
    this.data = JSON.parse(localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },
  save() {
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default recordListModel;