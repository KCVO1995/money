import {default as r} from '../request';


export default class Record {
  static create(data: Tag) {
    return r.post('/records', data);
  }
}

