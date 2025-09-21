import {defineConfig} from 'vite'
import path from "path"

export default defineConfig({
  plugins: [],
  base: '/afrianska/',
  resolve: {
    alias: {
    "@": path.resolve(__dirname, "src"),
    },
  },
})