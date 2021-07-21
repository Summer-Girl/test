import Vue from 'vue'
import App from './App'

import router from "./router";

import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
import VueAxios from 'vue-axios'

Vue.use(axios,VueAxios);

Vue.config.productionTip = false
Vue.use(router);
Vue.use(ElementUI)

new Vue({
  el: '#app',
  template: '<App/>',
  render: h => h(App),
  router
})
