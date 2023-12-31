import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import ClassPage from '../ClassPage';
import SidebarGlobal from '../Components/SidebarGlobal';
import WipPage from '../Components/WipPage';
import Dashboard from './Dashboard';
import Profile from '../Components/Profile';
import AnnouncementsPage from '../Components/AnnouncementsPage/AnnouncementsPage';

const { Header, Content, Sider } = Layout;

const Lay = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const Dash = <Dashboard colorBgContainer={colorBgContainer} setterFunc={setterFunc}/>
  const [centerContent, setContent] = useState(Dash);

  const navContent = [ Dash, 
                      <Profile name='John Doe' />,
                      Dash,
                      <AnnouncementsPage/>,
                      <WipPage title ={'Groups'}/>]

  function setterFunc(ClassID) {
    setContent(<ClassPage ClassID={ClassID}/>)    
  }

  function navFunction(index) {
    setContent(navContent[index])    
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

    

      <Layout style={{ flex: '1 0 auto' }}>
        <Sider
          width="10%"
          style={{
            background: colorBgContainer,
            backgroundColor: 'black',
            fontWeight: 'bold'
          }}
        >
          <SidebarGlobal navFunction={navFunction}></SidebarGlobal>
        </Sider>
        
        <div style={{width: '100%'}}>
          {centerContent}
        </div>

      </Layout>
    </div>
  );
};

export default Lay;
