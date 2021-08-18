


declare var util: object
declare var __REDUX_DEVTOOLS_EXTENSION__: () => any
// declare var React: any
// declare var ReactDOM: any


interface ImportMetaEnv {
    VITE_APP_NAME: string,
    VITE_APP_TITLE: string,
}

declare namespace Store {
    interface Action {
        type: string
        [key: string]: any
    }
}

