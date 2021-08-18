import { Navigate, Outlet } from 'react-router-dom';
import Layout from '@view'
import Login from '@view/user/login'
import Test from '@view/test'

const routes = (isLogin: boolean) => {
  return [
    // 公共路由
    { path: '/login', element: <Login /> },
    // 需要登陆访问路由
    {
      path: '/',
      element: isLogin ? <Layout /> : <Navigate to="/login" />,
      children: [
        { path: 'test', element: <Test /> },
      ],
    },

  ]
}

export default routes;


/**
 * example
 * {
    path: '/app',
    element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/account', element: <Account /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      {
        path: 'member',
        element: <Outlet />,
        children: [
          { path: '/', element: <MemberGrid /> },
          { path: '/add', element: <AddMember /> },
        ],
      },
    ],
  },
 */