import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@data': path.resolve(__dirname, './src/data'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@themes': path.resolve(__dirname, './src/themes'),
      '@images': path.resolve(__dirname, './src/images'),
    },
  },
  server: {
    port: 3000,
    open: true,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'mui': ['@mui/material', '@mui/icons-material', '@mui/lab'],
          'styling': ['styled-components'],
        },
      },
    },
  },
  define: {
    'process.env.VITE_APP_VERSION': JSON.stringify(process.env.npm_package_version),
  },
})
