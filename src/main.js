import Vue from 'vue'
import Framework7 from 'framework7/framework7.esm.bundle'
import Framework7Vue from 'framework7-vue'
import 'framework7-icons'
import 'framework7/css/framework7.bundle.min.css'
import App from './App.vue';
import store from './store'

import './assets/css/app.css'

Framework7.use(Framework7Vue);

// Init Vue App
export default new Vue({
  // Root Element
  el: '#app',
  store,
  render: c => c(App),
});