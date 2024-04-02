import Vue from 'vue'
import './plugins/axios'
import vuetify from './plugins/vuetify'
import App from './App.vue'

import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.filter('currency', value => {
  return 'R$ ' + value.toLocaleString()
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
