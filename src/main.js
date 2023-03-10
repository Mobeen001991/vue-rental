import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './routes'
Vue.config.productionTip = false

Vue.use(VueRouter)
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
