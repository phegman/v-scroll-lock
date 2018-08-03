import Vue from 'vue'
import App from './App.vue'
import VScrollLock from './v-scroll-lock.js'

Vue.use(VScrollLock)

new Vue({
  render: h => h(App)
}).$mount('#app')
