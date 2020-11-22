import React from 'react'
import styled from 'styled-components'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import img  from '../asset/5.jpg'

const StyledWrapper = styled.div`
 background-image: url('${img}');
min-height : 100vh ; 
display:flex;
justify-content: center;
align-items:center;


    .form-card{
        max-width: 400px;
        background-color:white;
        padding : 20px 40px ;
        border-radius: 8px;
        box-shadow : 0 0 6px 0 rgba(0,0,0,15); 
        width: 100%;

        @media(max-width : 425px){
            padding : 20px
        }
    }
`

const LoginPage = () => {

    const history  = useHistory();

    const onFinish = values => {
        console.log('Received values of form: ', values);

        history.push('/')
    }

    return (
        <StyledWrapper>
            <div className="form-card">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
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
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                       Or <Link to="/register">
                           register
                         </Link>
                    </Form.Item>
                </Form>



            </div>
        </StyledWrapper>
    )
}

export default LoginPage
