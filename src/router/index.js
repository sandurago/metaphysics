import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import LoginFormView from '../views/LoginFormView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'login',
    component: LoginFormView
  },

  {
    path: '/category/:categoryName',
    name: 'category',
    component: CategoryView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
