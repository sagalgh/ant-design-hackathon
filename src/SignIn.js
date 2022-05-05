import './App.less';
import 'antd/dist/antd.less';
import React from 'react'
import { Input, Button, Divider, Card, Space, Form,Checkbox, Anchor} from 'antd';
import appleLogo from './appleLogo.svg';
import googleLogo from './googleLogo.svg';
import LogoAndHeader from './LogoAndHeader';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn({children}) {
    const { Link } = Anchor;
    const [form] = Form.useForm();

  const onFinish = (values) => {
   if(values){
    navigate("/success")
   }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const handleClick = () => {
    form.validateFields()
    .then(() => {
        navigate("/success")
    })
    .catch((errorInfo) => {
       
    });
    }

  return (
    <Space align="left" direction="vertical" size="middle" style={{ display: 'flex' }}>
    <div className="space-align-container">
    <Card size="large" style={{ width: 350, boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)" }} >
    <LogoAndHeader heading="Sign in to League" /> 
    <Form
     form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 26,
      }}
      initialValues={{
        remember: true,

      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email address!',
          },

        () => ({
            validator(_, value) {
            if(!value || value === "user@gmail.com"){
                return Promise.resolve()
            }
            return Promise.reject(new Error('The email or password you entered is incorrect. If you don’t remember your password use the “Forgot Password?” link or contact help@league.com for additional support.'))
}
          })
        ]}
       
      >
        <Input placeholder="Enter your email address" />
      </Form.Item>

      <Form.Item
        // label="Password"
        placeholder="Enter your password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          () => ({
            validator(_, value) {
            if(!value || value === "league"){
                return Promise.resolve()
            }
            return Promise.reject(new Error('The email or password you entered is incorrect. If you don’t remember your password use the “Forgot Password?” link or contact help@league.com for additional support.'))
}
          })
        ]}
      >
        <Input.Password   placeholder="Enter your password" />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 1,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
   
        <Button type="primary" htmlType="submit" block onClick={handleClick}>
             Sign in
        </Button>
      </Form.Item>
    </Form>
    <Anchor>
    <Link href="forgot-password" title= "Forgot your password?"/>
    </Anchor>
    <Divider> OR </Divider>
    <Button type="default" >
    <img src={googleLogo} alt="google icon"/> Sign in with Google
    </Button>
    <br />
    <br />
    <Button type="default" >
    <img src={appleLogo} alt="facebook icon"/>Sign in with Facebook
    </Button>
    </Card>  
    </div>
    </Space>
    );

}

export default SignIn;
