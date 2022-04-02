import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "vuetify/dist/vuetify.min.css";
import "./assets/style.css"

// import axios from 'axios'
// import VueAxios from 'vue-axios'

Vue.config.productionTip = false

const appInstance = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
})
// appInstance.use(VueAxios, axios); //
appInstance.$mount('#app')
