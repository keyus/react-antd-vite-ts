import { Navigate, Outlet } from 'react-router-dom';
import Layout from '@view'
import Login from '@view/user/login'
import Control from '@view/control'
import Email from '@view/email'
import Files from '@view/files'

const routes = (isLogin: boolean) => {
  return [
    // 公共路由
    { path: '/login', element: <Login /> },
    // 需要登陆访问路由
    {
      path: '/',
      element: isLogin ? <Layout /> : <Navigate to="/login" />,
      children: [
        { path: '/', element: <Control /> },
        { path: 'email', element: <Email /> },
        { path: 'files', element: <Files /> },
      ],
    },
    // {
    //   path: 'member',
    //   element: <Outlet />,
    //   children: [
    //     { path: 'ddd', element: <MemberGrid /> },
    //     { path: 'aaa', element: <AddMember /> },
    //   ],
    // },
  ]
}

export default routes;

