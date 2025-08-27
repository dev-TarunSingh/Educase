import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/Educase/' : '/',  // ✅ works now
    plugins: [
      react(),
      {
        name: '404-fallback',
        closeBundle() {
          const indexHtml = resolve(__dirname, 'dist/index.html')
          const notFoundHtml = resolve(__dirname, 'dist/404.html')
          if (fs.existsSync(indexHtml)) {
            fs.copyFileSync(indexHtml, notFoundHtml)
          }
        }
      }
    ]
  }
})
