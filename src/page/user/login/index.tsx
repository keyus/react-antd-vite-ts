import { useState } from 'react';
import { Form, Input, Button, } from 'antd';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { UnlockOutlined, UserOutlined, ExclamationCircleOutlined, DribbbleOutlined } from '@ant-design/icons'
import { login } from '@store/user'
import './index.less'


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [error, setError] = useState('');
    const [visible, setVisible] = useState(false);

    const onFinish = async (values: any) => {
        console.log('Success login:', values);

        // http is global const has get and post method
        // const res = await http.get('/query4', {
        //     shouji: '1580281/=+6160',
        //     appkey: '467',
        // })
        dispatch(login({ username: 'stringss' }));
        navigate('/')
    };

    const onFinishFailed = (errorInfo: any) => {
        setError(errorInfo.errorFields[0].errors)
    };

    return (
        <div className='login-block'>
            <div className='login-logo'>
                <h1>
                    {config.logo}
                </h1>
            </div>
            <Form
                name="basic"
                className='login-form'
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    className='form-item'
                    name="username"
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input
                        size='large'
                        prefix={<UserOutlined />}
                        onInput={() => setError('')}
                        placeholder='用户名' />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password
                        size='large'
                        prefix={<UnlockOutlined />}
                        onInput={() => setError('')}
                        placeholder='密码' />
                </Form.Item>

                {
                    visible &&
                    <Form.Item
                        name="code"
                        className='form-item'
                        rules={[{ required: true, message: '请输入验证码' }]}
                    >
                        <Input
                            size='large'
                            prefix={<DribbbleOutlined />}
                            onInput={() => setError('')}
                            placeholder='请输入验证码' />
                    </Form.Item>
                }

                <Form.Item className='form-submit'>
                    <Button
                        className='submit-btn'
                        type="primary"
                        size='large'
                        htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;