import './App.less';
import 'antd/dist/antd.less';
import { PageHeader} from 'antd';
import logo from './logo.svg';
import React from 'react';
function LogoAndHeader({heading, children}) {
  return (
    
<>
      <div className="space-align-block">
      <img src={logo} alt="League logo"/>
      </div>
      <PageHeader
      className="site-page-header"
     title= {heading}
    />
  {children }
</>


    );

}

export default LogoAndHeader;
