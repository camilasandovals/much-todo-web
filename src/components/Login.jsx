import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

const firebaseConfig = {
    apiKey: "AIzaSyDhfWKwKkFu6T9jp-VxBWuwcmqdYhfbYD4",
    authDomain: "much-todo-api-cs.firebaseapp.com",
    projectId: "much-todo-api-cs",
    storageBucket: "much-todo-api-cs.appspot.com",
    messagingSenderId: "44024364998",
    appId: "1:44024364998:web:3e3e7cde31330126acfcc7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)


export default function Login({email, setEmail, password, setPassword, user, setUser}) {


    const navigate = useNavigate();

    const handleLogin = async(e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        const response = await signInWithEmailAndPassword(auth, email, password)
            .catch(err => alert(err))
            console.log(response.user)
            setUser(response.user);
        navigate("/")
    }
    return(
        <body>
        <main>
            <h1>Login</h1>
            <div className='member-text'>
            <p>Or <a href="https://much-todo-cs.web.app/signup">register now!</a></p>
            </div>
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
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" 
                value = {email}
                onChange = {e => setEmail(e.target.value)}/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                value = {password}
                onChange={e => setPassword(e.target.value)}
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
                
                    <Button type="primary" htmlType="submit" className="button-container">
                    Log in
                    </Button>

            </Form.Item>
            </Form>
        </main>
        </body>
    )
}