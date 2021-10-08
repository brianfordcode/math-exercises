import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
