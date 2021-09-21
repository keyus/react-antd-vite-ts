import { Navigate, Outlet } from 'react-router-dom';
import Layout from '@page'
import Login from '@page/user/login'
import Bind from '@page/user/bind'

import Im from '@page/im'
import Control from '@page/control'
import Email from '@page/email'
import Files from '@page/files'

const routes = (isLogin: boolean) => {
  return [
    // 公共路由
    { path: '/login', element: <Login /> },
    { path: '/bind', element: <Bind /> },

    // 需要登陆访问路由
    { 
      path: '/*',
      element: isLogin ? <Layout /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <Im /> },
        { path: 'control', element: <Control /> },
        { path: 'email', element: <Email /> },
        { path: 'files/*', element: <Files /> },
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

