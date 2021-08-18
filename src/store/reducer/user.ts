
let localUser: any = localStorage.getItem('user');
try {
    localUser = localUser ? JSON.parse(localUser) : {};
} catch {
    localUser = {};
}

const initState = {
    isLogin: false,
    ...localUser,
}

export default (state = initState, action: Store.Action) => {
    switch (action.type) {

        //登陆
        case 'user/login':
            // ...
            const userState = {
                ...state,
                isLogin: true,
            }
            localStorage.setItem('user', JSON.stringify(userState))
            return userState

        //退出    
        case 'user/logout':
            localStorage.removeItem('user');
            return initState;


        default:
            return state;
    }
}