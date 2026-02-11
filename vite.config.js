import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Jika deploy ke GitHub Pages, buka komentar baris di bawah dan ganti dengan nama repo Anda
  // base: '/FADELWEB.IO/',
  plugins: [react()],
})
