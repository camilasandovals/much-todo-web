import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from "react-router-dom"

export default function Login() {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/")
    }
    return(
        <main>
            <h1>Login</h1>
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={handleLogin}
            >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            {/* <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                Forgot password
                </a>
            </Form.Item> */}

            <Form.Item>
                <div>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                    </Button>
                </div>
                <div>
                    Or <a href="http://localhost:3000/signup">register now!</a>
                </div>
            </Form.Item>
            </Form>
        </main>
    )
}