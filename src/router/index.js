import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Category from '../views/Category.vue'
import Product from '../views/Product.vue'
import ProductEdit from '../views/ProductEdit.vue'
import ProductShow from '../views/ProductShow.vue'

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
    {
      path: '/product/:id',
      name: 'product-show',
      component: ProductShow,
      beforeEnter:Guard.auth
    },
    {
      path: '/product-edit/:id',
      name: 'product-edit',
      component: ProductEdit,
      beforeEnter:Guard.auth
    },
  ]
})

export default router
