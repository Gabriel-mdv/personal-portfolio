import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/personal-portfolio/',   // 👈 important for GitHub Pages (repo site)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
