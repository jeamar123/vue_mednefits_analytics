import Vue from 'vue'
import Router from 'vue-router'

// axios.defaults.baseURL = process.env.BASE_URL;
// axios.defaults.serverUrl = 'http://medicloud.local';

import Dashboard from './views/Dashboard.vue'
import Home from './views/Home.vue'
import User from './views/User.vue'
import Clinic from './views/Clinic.vue'
import Company from './views/Company.vue'
import Finance from './views/Finance.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    { path: '*', redirect: '/app'},
    {
      path: '/app',
      name: 'dashboard',
      redirect: '/app/dashboard',
      component: Dashboard,
      // meta: { auth: true },
      children: [
        { name: 'Home', path: '/app/dashboard', component: Home },
        { name: 'User', path: '/app/user', component: User },
        { name: 'Clinic', path: '/app/clinic', component: Clinic },
        { name: 'Company', path: '/app/company', component: Company },
        { name: 'Finance', path: '/app/finance', component: Finance },
      ]
    },
    
  ]
})
