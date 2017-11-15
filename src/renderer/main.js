import Vue from 'vue'
import VueRouter from 'vue-router/dist/vue-router'

import App from './App'
import {remote} from 'electron'
import Login from '@/components/Login'
import Index from '@/components/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'font-awesome/css/font-awesome.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
//import VueAuth from '@websanova/vue-auth'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(iView)

//Vue.http.options.root = 'https://api-demo.websanova.com/api/v1';
// Vue.use(VueAuth, {
//   auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
//   http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
//   router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
// });
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
  router
}).$mount('#app')
