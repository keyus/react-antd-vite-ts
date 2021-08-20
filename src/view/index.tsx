
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { Button, Layout, Image, Avatar, Dropdown, Menu } from 'antd'
import { LoginOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons'
import './index.less'


const { Header, Sider, Content } = Layout;


export default (props = {}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onLogout = useCallback((): void => {
        dispatch({ type: 'logout' });
        navigate('/login')
    }, []);

    const menu = (
        <Menu >
            <Menu.Item key="1" icon={<UserOutlined />}>个人中心</Menu.Item>
            <Menu.Item key="logout" onClick={onLogout} icon={<LoginOutlined />}>退出</Menu.Item>
        </Menu>
    );
    return (
        <Layout className='main-layout'>
            <Sider width={240} className='main-side'>
                <h1 className='main-logo'>logo</h1>
            </Sider>
            <Layout className='main-body'>
                <Header className='main-header'>
                    <div className='left'><MenuFoldOutlined /></div>
                    <div className='right'>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <span className='user'>
                                <label className='name'>Jsisaj</label>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </span>
                        </Dropdown>
                    </div>
                </Header>
                <Content>Content</Content>
            </Layout>
        </Layout>
    )
}