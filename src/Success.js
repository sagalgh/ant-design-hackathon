import React from 'react'
import vector from './vector.svg'
import logo from './logo.svg';
import {Space, Card, PageHeader} from 'antd'
const Success = () => {
  return (
    <Space align="center" direction="vertical" size="middle" style={{ display: 'flex' }}> 
    <div className="space-align-container-success">
    <Card size="large" style={{ width: 350, boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)" }}>
   <div>
    <img src={logo} alt="League logo"/>
    </div>
    <div className='success-vector'>
    <PageHeader title={"Signed in!"}/>
    
    <img src={vector} alt="Signed In vector" width="103" height="103"/>
    </div>
</Card>
 </div>
  </Space>
  )
};

export default Success