
import { useCallback, useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate, useLocation, } from 'react-router-dom'
import { Layout, Avatar, Dropdown, Menu } from 'antd'
import { LoginOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, MediumOutlined, CaretDownOutlined, SettingOutlined } from '@ant-design/icons'
import IconUserAvatar from '@img/user-avatar.svg';
import { menus } from '../routes'
import './index.less'


const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


export default () => {
    const { pathname } = useLocation();

    const selectedKeys = useMemo(() => util.matchMenus(pathname), []);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const onLogout = useCallback(() => {
        dispatch({ type: 'logout' });
        navigate('/login')
    }, []);
    const onClickMenus = useCallback(({ key }) => {
        navigate(key)
    }, [])

    const onToggleSide = useCallback(() => {
        setCollapsed(val => !val)
    }, [])

    const menu = (
        <Menu>
            <Menu.Item key="1" icon={<UserOutlined />}>个人中心</Menu.Item>
            <Menu.Item key="logout" onClick={onLogout} icon={<LoginOutlined />}>退出</Menu.Item>
        </Menu>
    );
    return (
        <Layout className='main-layout'>
            <Sider width={240} className='main-side' collapsed={collapsed}>
                <h1 className={`main-logo ${collapsed ? 'collapsed' : ''}`}>
                    <MediumOutlined />
                    <span className='app-name'>{config.appName}</span>
                </h1>
                <Menu
                    defaultSelectedKeys={selectedKeys}
                    defaultOpenKeys={selectedKeys}
                    onClick={onClickMenus}
                    className='main-menu'
                    mode="inline"
                >
                    {
                        menus.map((it: Obj) => {
                            if (Array.isArray(it.children)) {
                                return (
                                    <SubMenu
                                        key={it.url}
                                        title={it.title}
                                        icon={it.icon}>
                                        {
                                            it.children.map((son: Obj) => {
                                                return (
                                                    <Menu.Item key={son.url}>{son.title}</Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                            }
                            return (
                                <Menu.Item key={it.url} icon={it.icon}>{it.title}</Menu.Item>
                            )
                        })
                    }
                </Menu>
            </Sider>
            <Layout className='main-body'>
                <Header className='main-header'>
                    <div className='left'>
                        <div className='toggle-side' onClick={onToggleSide}>
                            {
                                collapsed ?
                                    <MenuUnfoldOutlined /> :
                                    <MenuFoldOutlined />
                            }
                        </div>

                        <div className='im-info'>
                            <span>今日会话：<em>0</em> 个</span>
                            <span>客户评分：<em className='red'>2.7</em>分</span>
                            <span>状态：正在接单</span>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='user-status'>
                            <i className='icon' />
                            在线
                            <CaretDownOutlined />
                        </div>
                        <div className='user-tools'>
                            <SettingOutlined />
                        </div>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <span className='user'>
                                <label className='name'>Jsisaj</label>
                                <Avatar src={IconUserAvatar} />
                            </span>
                        </Dropdown>
                    </div>
                </Header>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}