import ReactDOM from 'react-dom'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import zhCN from 'antd/lib/locale/zh_CN';
import store from '@store'
import routes from './routes'
import moment from 'moment-timezone'
import '@style/base.less'

/** 
 * this is global util,
 * console.log(util);
 */

function App() {
  return useRoutes(routes);
}

//亚州 上海时区
moment.tz.setDefault('Asia/Shanghai');
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter >
    </Provider>
  </ConfigProvider>
  ,
  document.getElementById('root')
)

