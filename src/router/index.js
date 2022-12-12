import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Category from '../views/Category.vue'
import Product from '../views/Product.vue'
import Guard from '../services/middleware'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter:Guard.auth
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
      beforeEnter:Guard.auth
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      beforeEnter:Guard.auth
    },
  ]
})

export default router
