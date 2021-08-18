import { useState } from 'react'
import logo from './logo.svg'
import { Button } from 'antd'
import Copy from '@com/copy'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>app name-{import.meta.env.VITE_APP_NAME}</p>
        <p>app title-{import.meta.env.VITE_APP_TITLE}</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <Button>hello</Button>
          <Button type='primary'>hello</Button>
        </p>
        <p>
          <Copy text='我是复制内容'><Button type='primary'>复制文本</Button></Copy>

          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
