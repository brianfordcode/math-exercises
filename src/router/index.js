import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import findTheNumber from '../views/find-the-number.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/findthenumber',
    name: 'findthenumber',
    component: findTheNumber
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
