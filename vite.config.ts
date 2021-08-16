import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import styleImport from 'vite-plugin-style-import'
import inject from '@rollup/plugin-inject'

const path = require('path');
const { getThemeVariables } = require('antd/dist/theme');

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: getThemeVariables({
          dark: true,       // 开启暗黑模式
          compact: true,    // 开启紧凑模式
        }),
      },
    },
  },
  resolve: {
    alias: {
      '@util': path.resolve(__dirname, './src/util/index.ts'),
    },
  },

  plugins: [
    reactRefresh(),
    styleImport({
      libs: [{
        libraryName: 'antd',
        esModule: true,
        resolveStyle: (name) => {
          return `antd/es/${name}/style/index`;
        },
      }]
    }),
    inject({
      React: ['react', 'default'],
      util: ['@util', 'default'],
      ReactDOM: ['react-dom', 'default'],
    })
  ],


  server: {
    proxy: {
      '/foo': 'http://localhost:4567/foo',
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // },
      // '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, '')
      // },
    }
  },
  build: {
    brotliSize: false,
  }
})
