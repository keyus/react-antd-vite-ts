import './index.css'
import App from './App'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import zhCN from 'antd/lib/locale/zh_CN';
import store from '@store'
import '@style/base.less'
// import config from '@config'
// import util from '@util'

/**
 * this is global util,
 */
// console.log(util);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
)
