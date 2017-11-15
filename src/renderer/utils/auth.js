import Vue from 'vue'
class JWTStorage {
  constructor() {
    this.prefix = 'Bearer'
  }
  setJWT(token) {
    window.sessionStorage.setItem('jwt', token)
  }
  removeJWT() {
    window.sessionStorage.setItem('jwt', '')
  }
  get JWT() {
    return window.sessionStorage.getItem('jwt')
  }
}

export default (new JWTStorage)