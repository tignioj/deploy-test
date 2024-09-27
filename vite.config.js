import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import flaskPlugin from "./vite-plugin-flask.js";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      // 仅在 build 模式下启用 flaskPlugin
      command === 'build' && flaskPlugin()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
  };
});