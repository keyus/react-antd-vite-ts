import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import user from './user'
import test from './test'

export const store = configureStore({
    reducer: {
        user,
        test,
    },
    middleware: (getDefaultMiddleware) => {
        if (import.meta.env.DEV) {
            return getDefaultMiddleware().concat([logger]);
        }
        return getDefaultMiddleware();
    },
    devTools: import.meta.env.DEV ? true : false,
})
export default store
export type RootState = ReturnType<typeof store.getState>
