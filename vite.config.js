import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  // Explicitly set the entry point to main.jsx in the root directory
  root: '.',
  publicDir: 'public',
  server: {
    open: true
  }
})