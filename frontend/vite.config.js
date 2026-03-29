import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

  ],
      server: {//i chane port have
      port: 1000,
      strictPort: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3000',//prefixing it
          changeOrigin: true,
          secure: false,
        }
      }
    }
})
