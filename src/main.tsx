import './index.css'
import App from './App'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN';

console.log(util);
ReactDOM.render( 
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode> 
  ,
  document.getElementById('root')
)
 