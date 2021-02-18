import {default as r} from '../request';


export default class Record {
  static create(data: RecordItem) {
    return r.post('/records', data);
  }

  static update(data: RecordItem) {
    return r.patch(`/records/${data.id}`, data);
  }

  static getOne(id: number) {
    return r.get(`/records/${id}`);
  }
}

