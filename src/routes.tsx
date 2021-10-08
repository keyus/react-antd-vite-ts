import { Outlet } from 'react-router-dom';
import { PieChartOutlined, DesktopOutlined, ContainerOutlined, MessageOutlined, } from '@ant-design/icons'

import Auth from '@com/auth'

import Layout from '@page'
import Login from '@page/user/login'
import Bind from '@page/user/bind'

import Im from '@page/im'
import Control from '@page/control'
import Email from '@page/email'
import EmailAdd from '@page/email/add'
import Files from '@page/files'
import FilesRead from '@page/files/read'
import FilesList from '@page/files/list'

import Error404 from '@page/404'

const routes = [
  // 公共路由
  { path: '/login', element: <Login /> },
  { path: '/bind', element: <Bind /> },

  // 需要登陆访问路由
  /**
   * path     react router path 路由path 由于path使用相对路由. 所以 path , match无法共享
   * match    antd menus 组件 default selectedKey openKey命中 规则 
   * url      菜单 menu link to url 跳转地址
   */
  {
    path: '/',
    element: <Auth><Layout /></Auth>,
    menu: true,
    children: [
      {
        title: '聊天',
        index: true,
        match: '/',
        url: '/',
        element: <Im />,
        icon: <MessageOutlined />
      },
      {
        title: '控制台',
        path: 'control',
        match: '/control/*',
        url: '/control',
        element: <Control />,
        icon: <PieChartOutlined />,
      },
      {
        title: '邮箱',
        path: 'email/*',
        match: '/email/*',
        url: '/email',
        element: <Outlet />,
        icon: <DesktopOutlined />,
        children: [
          {
            title: '收件箱',
            index: true,
            match: '/email',
            url: '/email/',
            element: <Email />,
          },
          {
            title: '添加邮件',
            path: 'add',
            match: '/email/add/*',
            url: '/email/add',
            element: <EmailAdd />,
          },
        ],
      },
      {
        title: '文件管理',
        path: 'files/*',
        match: '/files/*',
        url: '/files',
        element: <Outlet />,
        icon: <ContainerOutlined />,
        children: [
          {
            title: '文件中心',
            index: true,
            match: '/files',
            url: '/files/',
            element: <Files />,
          },
          {
            title: '读取操作',
            path: 'read',
            match: '/files/read/*',
            url: '/files/read',
            element: <FilesRead />,
          },
          {
            title: '列表操作',
            path: 'list',
            match: '/files/list/*',
            url: '/files/list',
            element: <FilesList />,
          },
        ],
      },
    ],
  },

  { path: '*', element: <Error404 /> },
]

const menus: any[] = (routes.find(it => it.menu) as any).children;
const menusFlat: any[] = menus.reduce((a: any[], b: Obj) => a.concat(b).concat(b.children || []), []);

export default routes;
export { menus, menusFlat }

