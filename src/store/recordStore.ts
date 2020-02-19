import recordListModel from '@/models/recordListModel';

export default {
  recordList: recordListModel.fetch(),
  addRecord(record: RecordItem) {
    recordListModel.add(record);
  },
};