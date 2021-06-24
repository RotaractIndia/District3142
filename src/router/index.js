import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../components/Contact.vue')
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('../components/Faq.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../components/Team.vue')
  },
  {
    path: '/zones',
    name: 'Zones',
    component: () => import('../components/Zones.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
