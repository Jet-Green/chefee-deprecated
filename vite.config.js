import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 'primary-color': '#c0004e',
          // 'success-color': '#5dfd35'
        },
        // modifyVars: getThemeVariables({
        //   dark: true,
        //   // compact: true,
        // }),
        javascriptEnabled: true,
      },
    },
  },
})
