import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Test from './class/test.js'

Vue.config.productionTip = false

const test = new Test()



new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
