import { defineConfig, loadEnv } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import styleImport from 'vite-plugin-style-import'
import inject from '@rollup/plugin-inject'
import svgr from '@svgr/rollup'
import { injectHtml } from 'vite-plugin-html'
// import legacy from '@vitejs/plugin-legacy'

const path = require('path');
const envDir = '.env';

export default defineConfig(({ mode }): any => {
  return {
    envDir,
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
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
        '@page': path.resolve(__dirname, 'src/page'),
      },
    },

    plugins: [

      reactRefresh(),
      svgr(),

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
        config: ['@config', 'default'],
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
      proxy: {
        '/api/query4': {
          target: 'https://way.jd.com/jisuapi',
          changeOrigin: true,
          rewrite: (path) => {
            console.log('path', path)
            return path.replace(/^\/api/, '');
          }
        },
      }
    },
    build: {
      brotliSize: false,                //不用分析报告
      chunkSizeWarningLimit: 2000,      //chunk大小警告限制
    }
  }
})
