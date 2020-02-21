import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';

const recordStore = {
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  saveRecords() {
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  addRecord(record: RecordItem) {
    record.createAt = new Date().toISOString();
    const newRecord = clone(record);
    this.recordList.push(newRecord);
    this.saveRecords();
  },
};
recordStore.fetchRecords();

export default recordStore;

