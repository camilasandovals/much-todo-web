import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp () {

    const navigate = useNavigate();
    const handleSignUp = () => {
        navigate('/')
    }
    return(
        <main> 
            <h1>Sign Up</h1>
            <Form name='normal_login'
            className='login-form'
            initialValues={{ remember: true}}
            onFinishe = {handleSignUp}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!'}]}
                    >
                    <Input prefix={<UserOutlined
                    className='site-for-item-icon' />}
                    placeholder='Username' />
                </Form.Item>
                <Form.Item
                    name='password'
                    rules={[{ required: true, mesagge: 'Please input your Password!'}]}
                >
                    <Input
                    prefix={<LockOutlined
                    className='site-form-item-icon' />}
                    type='password'
                    placeholder='Password'
                    />
                </Form.Item>
                <Form.Item>
                    <div>
                        <Button type='primary'
                        htmlType='submit'
                        className='login-form-button'>
                            Sign Up
                        </Button>
                    </div>
                    <div>
                        Or <a href='http://localhost:3000/login'>login now!</a>
                    </div>
                </Form.Item>

            </Form>
        </main>
    )
}