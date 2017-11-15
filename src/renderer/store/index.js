import axios from 'axios'
const store = {
  state: {
    isLogin: !!sessionStorage.getItem('token'),
    pending: false
  },
  mutations: {
    login(state) {
      state.pending = true;
    },
    login_success(state) {
      state.isLogin = true;
      state.pending = false;
    },
    logout(state) {
      state.isLogin = false;
    }
  },
  actions: {
    login({commit}, account) {
      commit('login')
      return axios({
        method: 'POST',
        url: 'http://127.0.0.1:5000/login',
        data: {
          username: account.username,
          password: account.password,
          region: account.region
        },
        headers: {
          'Content-type': 'application/json'
        }
      }).then((resp)=>{
        sessionStorage.setItem('token', 'Bearer ' + resp.data.access_token)
        commit('login_success')
        return Promise.resolve(true)
      }, (resp)=>{
        commit('logout');
        return Promise.reject(false)
      });
      // sessionStorage.setItem('token', token);
      // commit('login_success');
    },
    logout({commit}) {
      sessionStorage.removeItem('token');
      commit('logout');
    }
  },
  getters: {
    isLogin: state => state.isLogin
  }
}

export default store