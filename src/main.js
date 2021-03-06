import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCodeMirror from 'vue-codemirror'

Vue.config.productionTip = false
Vue.use(VueCodeMirror)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
