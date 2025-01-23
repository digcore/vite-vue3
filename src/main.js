import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'

// createApp(App).mount('#app')
const app = createApp(App)

app.use(router)

app.mount('#app')

import Vconsole from 'vconsole' // 引入 vconsole
new Vconsole() // 如所有环境均需开启 则不需要判断