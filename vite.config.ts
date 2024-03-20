import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import stylelint from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), stylelint({ fix: true })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "gerillass"; 
          @import "./src/assets/variables.scss";
          @import "./src/assets/mixins.scss";
        `
      }
    }
  }
})
