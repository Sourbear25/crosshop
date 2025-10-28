import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow Replit (and other dev hosts). Safe for development.
    allowedHosts: ['*']
  }
})