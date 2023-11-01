import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import ProgressBar from './ProgressBar';
import CardGrids from './CardGrids';
import ClassPage from '../ClassPage';

const { Header, Content, Sider } = Layout;

const Lay = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [centerContent, setContent] = useState(true);

  function setterFunc() {
    setContent(false)    
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header
        style={{
          background: colorBgContainer,
          backgroundColor: 'lightblue',
          display: 'flex',
          height: '10%',
          padding: '0 10%',
        }}
      >
        <h1>Dashboard</h1>
      </Header>
    

      <Layout style={{ flex: '1 0 auto' }}>
        <Sider
          width="10%"
          style={{
            background: colorBgContainer,
            backgroundColor: 'red',
          }}
        >
          {/* This is where side icons go */}
        </Sider>

        {centerContent ?
        <Layout
          style={{
            padding: '0 2% 5%',
            background: colorBgContainer,
            backgroundColor: 'lightgreen',
            height: '100%',
          }}
        >
          <ProgressBar /><CardGrids setterFunc={setterFunc}/>

        </Layout> :

        <div style={{
          width: '100%'
        }}>
          <ClassPage/>
        </div> }

      </Layout>
    </div>
  );
};

export default Lay;
