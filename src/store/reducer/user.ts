

const initState = {
    isLogin: false,
}

export default (state = initState, action: Store.Action) => {
    switch (action.type) {

        //登陆
        case 'user/login':
            // ...
            return {
                ...state,
            }

        //退出    
        case 'user/logout':
            return initState;

            
        default:
            return state;
    }
}