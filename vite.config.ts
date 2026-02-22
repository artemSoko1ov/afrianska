import { defineConfig } from 'vite'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  base: '/afrianska/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "./styles/helpers" as *;`,
  //       silenceDeprecations: ['legacy-js-api'],
  //     },
  //   },
  // },
})
