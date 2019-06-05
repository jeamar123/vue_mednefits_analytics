import Vue from 'vue';
import vClickOutside from 'v-click-outside';
import VCalendar from 'v-calendar';
import VueMoment from 'vue-moment';

import 'v-calendar/lib/v-calendar.min.css';
 
import $ from 'jquery'; 

import App from './App.vue';
import router from './router';


Vue.use(vClickOutside);
Vue.use(VCalendar);
Vue.use(VueMoment);
Vue.config.productionTip = false;

// const $ = require('jquery');
window.$ = $; 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
