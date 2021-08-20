import { defineConfig, loadEnv } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import styleImport from 'vite-plugin-style-import'
import inject from '@rollup/plugin-inject'
import { injectHtml } from 'vite-plugin-html'
// import legacy from '@vitejs/plugin-legacy'
// const { getThemeVariables } = require('antd/dist/theme');

const path = require('path');
const envDir = '.env';

export default defineConfig(({ mode, ...config }) => {
  return {
    envDir,
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // modifyVars: getThemeVariables({
          //   dark: true,       // 开启暗黑模式
          //   compact: true,    // 开启紧凑模式
          // }),
        },
      },
    },
    resolve: {
      alias: {
        '@util': path.resolve(__dirname, 'src/util'),
        '@com': path.resolve(__dirname, 'src/components'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@style': path.resolve(__dirname, 'src/assets/style'),
        '@img': path.resolve(__dirname, 'src/assets/img'),
        '@view': path.resolve(__dirname, 'src/view'),
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
        http: ['@util/http', 'default'],
        ReactDOM: ['react-dom', 'default'],
      }),
      injectHtml({
        injectData: loadEnv(mode, envDir),
      }),

      //ie 兼容
      // legacy({
      //   targets: ['ie >= 11'],
      //   additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      // })

      // 自定义引入
      // legacy({
      //   polyfills: ['es.promise.finally', 'es/map', 'es/set'],
      //   modernPolyfills: ['es.promise.finally']
      // })
    ],


    server: {
      // https: true,
      proxy: {
        // '/foo': 'http://localhost:4567/foo',
        '/api/query4': {
          target: 'https://way.jd.com/jisuapi',
          changeOrigin: true,
          rewrite: (path) => {
            console.log('path', path)
            return path.replace(/^\/api/, '');
          }
        },
        // '^/fallback/.*': {
        //   target: 'http://jsonplaceholder.typicode.com',
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/fallback/, '')
        // },
      }
    },
    build: {
      brotliSize: false,                //不用分析报告
      chunkSizeWarningLimit: 2000,      //chunk大小警告限制
    }
  }
})
