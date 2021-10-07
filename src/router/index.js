import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/findthenumber',
    name: 'findthenumber',
    component: () => import('../views/find-the-number.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
