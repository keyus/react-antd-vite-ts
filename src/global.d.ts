
import ReactDOM from 'react-dom'


declare global {
    const util: object;
    const React: typeof React;
    const ReactDOM: typeof ReactDOM;
}

interface ImportMetaEnv {
    VITE_APP_NAME: string,
    VITE_APP_TITLE: string,
}