import React, { useState } from 'react';
import {
    Form,
    Input,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bg from '../asset/5.jpg';
const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url('${bg}');
    .form-card {
        background-color:  white;
        max-width: 600px;
        width: 100%;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 6px 0 rgba(0,0,0,.15);
    }
    .title {
        text-align: center;
    }
`;

const RegisterPage = () => {

    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
     
        const [form] = Form.useForm();
      
        const onFinish = values => {
          console.log('Received values of form: ', values);
        };          
            

    return (
        <StyledWrapper>
            <div className='form-card'>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('The two passwords that you entered do not match!');
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="firstname"
                        label="firstname"
                        rules={[{ required: true, message: 'Please input your firstname!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="lastname"
                        label="lastname"
                        rules={[{ required: true, message: 'Please input your lastname!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Link to='/login'>
                         Or login
                        </Link>
                    </Form.Item>
                </Form>


            </div>
        </StyledWrapper>
    )
}

export default RegisterPage
