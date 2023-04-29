import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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


export default function SignUp () {
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState();

    const navigate = useNavigate();

    const handleSignUp = async(e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        const result = await createUserWithEmailAndPassword(auth, email, password)
        .catch(err => alert(err));
        console.log(result.user);
        setUser(result.user)
        navigate('/')
    }

    const signInWithGoogle = async() => {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
            .catch(alert)
        setUser(result.user)
    }

    return(
        <main> 
            <h1>Sign Up</h1>
            <div>
                Already a member? <a href='http://localhost:3000/login'>Login!</a>
            </div>
            <Form name='normal_login'
            className='login-form'
            initialValues={{ remember: true}}
            onFinish = {handleSignUp}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!'}]}
                    >
                    <Input prefix={<UserOutlined
                    className='site-for-item-icon' />}
                    placeholder='Username' 
                    value = { email} 
                    onChange = { e => setEmail(e.target.value)}/>
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
                    value = { password }
                    onChange = { e => setPassword(e.target.value)}
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
                        Or sign up with <Button onClick = {signInWithGoogle} type='primary'>Google</Button>
                    </div>

                </Form.Item>

            </Form>
        </main>
    )
}