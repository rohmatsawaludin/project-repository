import Vue from 'vue'
import App from './App.vue'

import router from "./router.js"

import connection from "./connection"

import {
   BootstrapVue, 
   IconsPlugin 
  } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  connection,
  router,
  render: h => h(App),
}).$mount('#app')
