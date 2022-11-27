import { defineConfig } from "vite"
import uni from "@dcloudio/vite-plugin-uni"
import unocss from 'unocss/vite'
import presetUno from "@unocss/preset-uno"
import presetAttributify from '@unocss/preset-attributify'
import transformerDirectives from '@unocss/transformer-directives'
import { fileURLToPath, URL } from "url"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), unocss({
    presets: [presetAttributify(), presetUno()],
    transformers: [
      transformerDirectives(),
    ],
    shortcuts: {
      'home-card': 'py-5 rounded-lg bg-white shadow-lg'
    }
  })],
  optimizeDeps: {
    entries: ['@dcloudio/uni-ui']
  },
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
        // additionalData: "@import '@/uni.scss';"
      }
    }
  }
})
