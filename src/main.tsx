import ReactDOM from 'react-dom'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { Provider, useSelector } from 'react-redux'
import zhCN from 'antd/lib/locale/zh_CN';
import store from '@store'
import type { RootState } from '@store'
import routes from './routes'
import moment from 'moment-timezone'
import '@style/base.less'

/** 
 * this is global util,
 * console.log(util);
 */

function AppRoutes() {
  const { isLogin } = useSelector((state: RootState) => state.user);
  return useRoutes(routes(isLogin));
}

//亚州 上海时区
moment.tz.setDefault('Asia/Shanghai');
ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
  ,
  document.getElementById('root')
)
