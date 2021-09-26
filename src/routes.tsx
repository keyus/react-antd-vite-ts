import { Navigate, Outlet } from 'react-router-dom';
import { PieChartOutlined, DesktopOutlined, ContainerOutlined, MessageOutlined, } from '@ant-design/icons'

import Layout from '@page'
import Login from '@page/user/login'
import Bind from '@page/user/bind'

import Im from '@page/im'
import Control from '@page/control'
import Email from '@page/email'
import Files from '@page/files'
import FilesRead from '@page/files/read'
import FilesList from '@page/files/list'

const routes = (isLogin?: boolean) => {
  return [
    // 公共路由
    { path: '/login', element: <Login /> },
    { path: '/bind', element: <Bind /> },

    // 需要登陆访问路由
    {
      path: '/',
      element: isLogin ? <Layout /> : <Navigate to="/login" />,
      menu: true,
      children: [
        {
          title: '聊天',
          index: true,
          url: '/',
          element: <Im />,
          icon: <MessageOutlined />
        },
        {
          title: '控制台',
          path: 'control',
          url: '/control',
          element: <Control />,
          icon: <PieChartOutlined />,
        },
        {
          title: '邮箱',
          path: 'email',
          url: '/email',
          element: <Email />,
          icon: <DesktopOutlined />,
        },
        {
          title: '文件管理',
          path: 'files',
          url: '/files/*',
          element: <Outlet />,
          icon: <ContainerOutlined />,
          children: [
            {
              title: '文件中心',
              index: true,
              url: '/files',
              element: <Files />,
            },
            {
              title: '读取操作',
              path: 'read',
              url: '/files/read',
              element: <FilesRead />,
            },
            {
              title: '列表操作',
              path: 'list',
              url: '/files/list',
              element: <FilesList />,
            },
          ],
        },
      ],
    },
  ]
}

export const menus: Obj = (routes().find(it => it.menu) as any).children;
export default routes;

