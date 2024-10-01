import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures output is in ./dist directory
    emptyOutDir: true, // Optionally clears the directory before building
  },
})