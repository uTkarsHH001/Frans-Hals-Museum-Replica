import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Specify additional assets to be copied to the output directory (dist)
    assetsInclude: ['./dist/assets/index-bthTjQ_z.js', './dist/assets/index-Bw5XaEfj.css'],
  },
})
