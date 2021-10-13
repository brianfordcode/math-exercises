import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import findTheNumber from '../views/find-the-number.vue'
import selectTheCircle from '../views/select-the-circle.vue'

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
    path: '/selectthecircle',
    name: 'selectthecircle',
    component: selectTheCircle
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
