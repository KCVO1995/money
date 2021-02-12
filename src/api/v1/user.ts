import { default as r } from '../request'

export default class User {
  static login(data: LoginForm) {
    return r.post('/users/login', data)
  }

  static register(data: RegisterForm) {
    return r.post(`/users/register`, data)
  }
}

