import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import LoginView from '../views/login/LoginView.vue'
import MainView from '../views/main/MainView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: MainView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/main',
      name: 'main',
      component: MainView
    },
    // {
    //   path: '/main',
    //   name: 'main',
    //   component: () => import('../views/main/MainView.vue')
    // },
  ]
})

export default router
