
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch, } from 'react-redux'
import { login } from '@store/user'
import type { RootState } from '@store'


export default function Auth({ children }: { children: JSX.Element }) {
    const location = useLocation();
    const user = useSelector((state: RootState) => state.user);
    if (!user.isLogin) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
}

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return {
        signin(data: Obj) {
            dispatch(login(data));
            navigate('/')
        },
        signout() {
            dispatch({ type: 'logout' });
            navigate('/login')
        }
    }
}