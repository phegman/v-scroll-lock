import Vue from 'vue'
import Demo from './Demo.vue'
import VScrollLock from './index'

Vue.use(VScrollLock)

new Vue({
  render: h => h(Demo),
}).$mount('#app')
