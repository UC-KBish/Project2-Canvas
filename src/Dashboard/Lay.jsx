import React from 'react';
import { Layout, Menu, theme } from 'antd';
import ProgressBar from './ProgressBar';
import CardGrids from './CardGrids';

const { Header, Content, Sider } = Layout;

const Lay = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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

        <Layout
          style={{
            padding: '0 2% 5%',
            background: colorBgContainer,
            backgroundColor: 'lightgreen',
            height: '100%',
          }}
        >
           <ProgressBar />
           <CardGrids />

        </Layout>


      </Layout>
    </div>
  );
};

export default Lay;
