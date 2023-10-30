import React from 'react';
import { Layout, Menu, theme } from 'antd';
import ProgressBar from './ProgressBar';

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
          padding: '0 10%',
        }}
      >
        <h1>Dashboard</h1>
        
        <ProgressBar />

      </Header>

      <Layout style={{ flex: '1 0 auto' }}>
        <Sider
          width="10%"
          style={{
            background: colorBgContainer,
            backgroundColor: 'red',
          }}
        >
          this is where side icons go
          {/* side icons file */}
        </Sider>


        <Layout
          style={{
            padding: '0 2% 5%',
            background: colorBgContainer,
            backgroundColor: 'green',
            height: '100%',
          }}
        >
          class card components
          {/* class component cards */}
        </Layout>
      </Layout>
    </div>
  );
};

export default Lay;
