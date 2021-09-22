
import { createSlice } from '@reduxjs/toolkit'

let localUser: any = localStorage.getItem('user');
try {
    localUser = localUser ? JSON.parse(localUser) : {};
} catch {
    localUser = {};
}

const initialState = {
    isLogin: false,
    ...localUser,
}

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogin = true;
            localStorage.setItem('user', JSON.stringify(state));
        },
    },
    /**
     * 上面的reducer action name 为   'user/login'
     * 
     * 扩展的reducer action 不含前缀引导 即   action 'logout' 
     * 如果调用 type: 'logout' 则所有reducer  logout都会执行  
     */
    extraReducers: {
        logout: (state) => {
            console.log('user/logout')
            localStorage.removeItem('user');
            state = initialState;
        }
    }

})

export const { login } = user.actions;
export default user.reducer
