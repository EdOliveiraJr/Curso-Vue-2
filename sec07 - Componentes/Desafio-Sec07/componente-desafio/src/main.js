import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'
import Bar from './components/Bar.vue'
import Navigation from './components/Navigation.vue'

Vue.config.productionTip = false
Vue.component('app-footer', Footer)
Vue.component('app-main', Main)
Vue.component('app-bar', Bar)
Vue.component('app-navigation', Navigation)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
