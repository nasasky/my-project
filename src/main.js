import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store' //引入store


import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

import axios from "axios";

axios.defaults.withCredentials = true;

Vue.prototype.$axios = axios;

import "font-awesome/css/font-awesome.min.css";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //使用store
  render: h => h(App)
})
