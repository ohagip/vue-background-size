import Vue from 'vue'
import App from './App.vue'
import VueBackgroundSize from './vue-background-size'

Vue.config.productionTip = false

Vue.use(VueBackgroundSize)

new Vue({
  render: h => h(App),
}).$mount('#app')
