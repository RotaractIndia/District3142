import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import router from './router';


Vue.config.productionTip = false
Vue.component('Navbar', require('./components/Navbar.vue').default)
Vue.component('Footer', require('./components/Footer.vue').default)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
