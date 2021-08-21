import { useState } from 'react';
import { Form, Input, Button, } from 'antd';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { UnlockOutlined, UserOutlined, MediumOutlined, ExclamationCircleOutlined, DribbbleOutlined } from '@ant-design/icons'
import { login } from '@store/user'
import './index.less'

// http is global const has get post method

http('/query4', {
    shouji: '1580281/=+6160',
    appkey: '467',
}, {})

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [error, setError] = useState('');
    const [visible, setVisible] = useState(true);

    const onFinish = async (values: any) => {
        console.log('Success login:', values);

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
                    <MediumOutlined />
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
                    validateStatus='success'
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input
                        prefix={<UserOutlined />}
                        onInput={() => setError('')}
                        placeholder='请输入用户名' />
                </Form.Item>

                <Form.Item
                    name="password"
                    className={
                        `form-item ${visible ? 'form-has-code' : ''}`
                    }
                    validateStatus='success'
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password
                        prefix={<UnlockOutlined />}
                        onInput={() => setError('')}
                        placeholder='请输入密码' />
                </Form.Item>

                {
                    visible &&
                    <Form.Item
                        name="code"
                        className='form-item'
                        validateStatus='success'
                        rules={[{ required: true, message: '请输入验证码' }]}
                    >
                        <Input
                            prefix={<DribbbleOutlined />}
                            onInput={() => setError('')}
                            placeholder='请输入验证码' />
                    </Form.Item>
                }

                <div className='login-error'>
                    {
                        error ? <ExclamationCircleOutlined /> : null
                    }{error}
                </div>

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