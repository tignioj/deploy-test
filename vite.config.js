import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'static/assets',
    rollupOptions: {
      output: {
        entryFileNames: 'static/assets/[name].[hash].js',
        chunkFileNames: 'static/assets/[name].[hash].js',
        assetFileNames: 'static/assets/[name].[hash].[ext]'
      }
    }
  },
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'html') {
        return { relative: true }
      }
      return { relative: true }
    }
  }
})