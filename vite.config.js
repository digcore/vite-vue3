import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/vite-vue3/',
  plugins: [vue()],
  // build输出的目录设置为gh-pages
  build: {
    outDir: 'gh-pages'
  }
})
