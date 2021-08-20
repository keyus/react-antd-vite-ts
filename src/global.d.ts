
interface Obj {
    [key: string]: any,
}

type QueryStringData = string | Obj | undefined | null

interface FetchOptions {
    method?: string
    [key: string]: any
}

interface Http {
    get(url: string, data?: QueryStringData, options?: FetchOptions): Promise<any>
    post(url: string, data?: QueryStringData, options?: FetchOptions): Promise<any>
    [key: string]: any
}

declare const util: Obj
declare const http: Http
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

