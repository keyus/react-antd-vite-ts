
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { Button } from 'antd'

export default (props = {}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onLogout = useCallback((): void => {
        dispatch({type: 'logout'});
        navigate('/login')
    }, [])
    return (
        <div style={{ padding: 50 }}>
            layout dashbord  主页菜单
            <p><Link to='test'>测试页</Link></p>
            <p><Button onClick={onLogout}>退出</Button></p>
            <Outlet />
        </div>
    )
}