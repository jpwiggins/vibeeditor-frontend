import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/vibeeditor-frontend/', // Change this to your GitHub repo name
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          stripe: ['@stripe/stripe-js']
        }
      }
    }
  },
  root: '.',
  publicDir: 'public',
  server: {
    open: true,
    port: 3000
  },
  preview: {
    port: 4173
  }
})