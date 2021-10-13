import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import findTheNumber from '../views/find-the-number.vue'
import colorTheCircle from '../views/color-the-circle.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/findthenumber',
    name: 'findthenumber',
    component: findTheNumber
  },
  {
    path: '/colorthecircle',
    name: 'colorthecircle',
    component: colorTheCircle
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
