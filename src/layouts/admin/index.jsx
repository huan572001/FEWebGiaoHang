import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { routerLinks } from '@/utils';
import { useNavigate } from 'react-router';

import listMenu from './menus';

import { keyToken } from '@/variable';
import { useAuth } from '@/global';
const { Content, Footer, Sider } = Layout;

const App = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();
  return (
    <Layout
      style={{
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <Sider
        style={{
          background: '#ECECEC',
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div>dsadsadasd</div>
        <Menu
          style={{
            background: '#ECECEC',
          }}
          defaultSelectedKeys={['1']}
          onClick={(info) => {
            !localStorage.getItem(keyToken)
              ? navigate(routerLinks('Login'), { replace: true })
              : navigate(routerLinks(info.key));
          }}
          mode="inline"
          items={listMenu}
        />
        <div
          onClick={() => {
            auth.logout();
            navigate(routerLinks('Login'));
          }}
        >
          logout
        </div>
      </Sider>
      <Layout className="site-layout">
        <Content>{children}</Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
