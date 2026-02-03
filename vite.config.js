import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // <--- CORRECT IMPORT
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // base: './', // Uncomment if you are deploying to a subdirectory
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
