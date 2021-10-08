import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import findTheNumber from '../views/find-the-number.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/findthenumber',
    name: 'findthenumber',
    component: findTheNumber
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
