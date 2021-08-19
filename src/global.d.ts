


declare var util: object
declare var __REDUX_DEVTOOLS_EXTENSION__: () => any

interface ImportMetaEnv {
    VITE_APP_NAME: string,
    VITE_APP_TITLE: string,
}

/**
 * store 
 * rootState is all reducer tree
 * if add reducer add that name
 */
declare namespace Store {

    interface Action {
        type: string
        [key: string]: any
    }

}

