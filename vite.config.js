import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['xlsx'],
      output: {
        globals: {
          xlsx: 'XLSX'
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true
  },
  server: {
    headers: {
      'Cache-Control': 'no-store'
    }
  }
})
