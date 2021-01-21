import Vue from 'vue'
import App from './App.vue'
import "../node_modules/bulma/css/bulma.css"
import VueRellax from 'vue-rellax'
Vue.use(VueRellax);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
