import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://constance03.github.io/",
  build: {
  outDir: 'build'
  },
  plugins: [react()]
})
