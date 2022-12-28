import { Card, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { routerLinks } from '@/utils';
import { useNavigate } from 'react-router';

import listMenu from './menus';

import { keyToken } from '@/variable';
import { useAuth } from '@/global';
import './index.less';
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
      <Sider className="sider">
        <div className="cardName">
          <h1>GHN</h1>
          <div className="abc">
            <img
              style={{ width: 35, height: 35, borderRadius: 50, marginTop: 5 }}
              src="https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg"
              alt="logoMale"
            />
            <div style={{ paddingLeft: 5 }}>
              <div className="nameUser">Huan</div>
              <div>huan@gmail.com</div>
            </div>
          </div>
        </div>
        <Menu
          className="menu"
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
          className="logout"
          onClick={() => {
            auth.logout();
            navigate(routerLinks('Login'));
          }}
        >
          logout
        </div>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ background: '#FFF', padding: 15 }}>
          {children}
        </Content>
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
