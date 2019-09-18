import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueMathjax from 'vue-mathjax'

Vue.config.productionTip = false
Vue.use(VueMathjax)

new Vue({
  router,
  store,
  VueMathjax,
  vuetify,
  render: h => h(App)
}).$mount('#app')
