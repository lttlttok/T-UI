import Vue from 'vue'
import App from './App.vue'
import tui from './packages/index'
Vue.use(tui)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
