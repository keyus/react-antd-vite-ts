
import { useState } from 'react'
import { Layout, Avatar, Menu } from 'antd'
import { GoogleOutlined, MediumOutlined, } from '@ant-design/icons'
import Bind from './bind'
import Success from './success'
import './index.less'


const { Header, Sider, Content } = Layout;

export default () => {

    const [pass, setPass] = useState<boolean>(false)

    return (
        <Layout className='bind-layout'>
            <Sider width={240} className='main-side'>
                <h1 className='main-logo'><MediumOutlined />{config.appName}</h1>
                <Menu
                    defaultSelectedKeys={['/bind']}
                    className='main-menu'
                    mode="inline"
                >
                    <Menu.Item key="/bind" icon={<GoogleOutlined />}>
                        绑定谷歌认证
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className='main-body'>
                <Header className='main-header'>
                    <div className='left' />
                    <div className='right'>
                        <span className='user'>
                            <label className='name'>Jsisaj</label>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </span>
                    </div>
                </Header>
                <Content className='main-content'>
                    <div className='bind-block'>
                        {
                            pass ? <Success /> : <Bind setPass={setPass} />
                        }
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}