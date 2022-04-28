import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitePluginCommonjs } from 'vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginCommonjs()
  ],
  server: {
    port: 4500,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: [
      {
        find: /^@\/(.*)$/,
        replacement: `${path.resolve('.')}/src/$1`
      }
    ]
  }
})
