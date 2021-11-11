import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import findTheNumber from '../views/find-the-number.vue'
import selectTheCircle from '../views/select-the-circle.vue'
import findTheShape from '../views/find-the-shape.vue'
import jsonUserData from '../views/json-user-data.vue'


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
  },
  {
    path: '/findtheshape',
    name: 'findtheshape',
    component: findTheShape
  },
  {
    path: '/jsonuserdata',
    name: 'jsonuserdata',
    component: jsonUserData
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
