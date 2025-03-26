import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/date2/',
  plugins: [
    tailwindcss(),

  ],
})
