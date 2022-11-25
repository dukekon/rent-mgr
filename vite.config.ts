import { fileConfig } from './src/tmui/components/tm-upload/upload'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))

      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/uni.scss';`,
      },
    },
  },
})
