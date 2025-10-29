import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    base: '/Repo_Name/'
  },

  test: {
  environment: 'jsdom',
  setupFiles: './src/setupTests.js',
  globals: true,
  css: true,
  coverage: {
    exclude: ['src/test-utils.jsx'] // helpers/utilities not under test
    }
  }
})