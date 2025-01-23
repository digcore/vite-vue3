import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import LoginView from '../views/login/LoginView.vue'
import MainView from '../views/main/MainView.vue'
import BleView from '../views/ble/BleView.vue'

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
    {
      path: '/ble',
      name: 'ble',
      component: BleView
    },
    {
      path: '/ble-check',
      name: 'ble-check',
      component: () => import('../views/ble/BleCheck.vue')
    },
  ]
})

export default router
