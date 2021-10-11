import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'lib-flexible'

Vue.config.productionTip = false

let vm = new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
console.log(vm)
