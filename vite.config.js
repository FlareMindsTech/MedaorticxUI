import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    sourcemapIgnoreList: () => true,
    headers: {
      'X-Robots-Tag': 'index, follow',
    }
  },
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
  },
  build: {
    target: 'es2020',
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    cssMinify: true,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        sourcemap: false,
        manualChunks(id) {
          // Keep React core minimal
          if (id.includes('react-dom') || id.includes('react/')) {
            return 'vendor-react';
          }
          if (id.includes('react-router') || id.includes('@remix-run')) {
            return 'vendor-router';
          }
          // framer-motion is lazily loaded only if needed
          if (id.includes('framer-motion')) {
            return 'vendor-motion';
          }
          // Three.js is already code-split via dynamic import in Hero
          if (id.includes('three') || id.includes('@react-three')) {
            return 'vendor-three';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
