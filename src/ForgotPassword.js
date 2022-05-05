import React from 'react'
import logo from './logo.svg';
import { PageHeader, Space, Card, Input, Button } from 'antd';
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
    const navigate = useNavigate();
    const handleClick = function(){
        navigate("/")
    }
  return (
    <Space align="left" direction="vertical" size="middle" style={{ display: 'flex' }}>
    <div className="space-align-container">
    <Card size="large" style={{ width: 350, boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)" }}>
      <img src={logo} alt="League logo"/>
     
<PageHeader
      className="site-page-header"
     title= "Forgot your password?"
    />
    <p>To reset your password, please enter the email address associated with your League account</p>
    <Input placeholder="Enter your email address" />
    <div className="btn-forgot-pass">
    <Button type="default" onClick={handleClick}> Back</Button> 
    <Button type="primary" onClick={handleClick}>Sign in</Button>
    </div>
    </Card>
    </div>
    
    </Space>
  )
}

export default ForgotPassword