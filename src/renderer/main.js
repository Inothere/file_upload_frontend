import Vue from 'vue'
import VueRouter from 'vue-router/dist/vue-router'

import App from './App'
import {remote} from 'electron'
import Login from '@/views/Login'
import Index from '@/views/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'font-awesome/css/font-awesome.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
//import VueAuth from '@websanova/vue-auth'

import store from './store/index';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(iView)

// intercept all request and add jwt token
// Vue.axios.interceptors.request.use((config) => {
//   let token = Vue.$store.
// })


const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/login',
    component: Login
  }
]



const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
new Vue({
  components: { App },
  template: '<App/>',
  router: new VueRouter({ routes }),
  store
}).$mount('#app')
