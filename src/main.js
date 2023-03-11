import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import './plugins'

import { router } from './router'
import store from './store'

Vue.prototype.$image_path = 'https://localhost:8000/';
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.vm = vm