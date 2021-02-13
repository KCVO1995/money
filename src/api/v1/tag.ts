import {default as r} from '../request';


export default class Tag {
  static create(data: Tag) {
    return r.post('/tags', data);
  }

  static get() {
    return r.get(`/tags`);
  }
}

