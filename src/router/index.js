import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import dayBookRouter from '../modules/daybook/router/index'
import authRouter from '../modules/auth/router/index'
import isAuthenticatedGuard from './auth-guard'

const routes = [
  {
    path: '/',
    redirect:'/daybook'
  },
  {
    path: '/daybook',
    beforeEnter: [ isAuthenticatedGuard ],
    ...dayBookRouter
  },
  {
    path:'/auth',
    ...authRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
