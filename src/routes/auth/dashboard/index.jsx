import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routerLinks } from '@/utils';
import { Footer } from 'antd/lib/layout/layout';
const Page = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          background: '#FF8302',
          display: 'flex',
          height: 50,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: 35, color: '#FFF', marginLeft: 15 }}>GHN</div>
        <div style={{ marginRight: 15 }}>
          <Button
            style={{ borderRadius: 15 }}
            onClick={() => navigate(routerLinks('Login'))}
          >
            Đăng nhập
          </Button>
          <Button
            style={{ borderRadius: 15 }}
            onClick={() => navigate(routerLinks('Register'))}
          >
            Đăng ký
          </Button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          style={{ width: '53%' }}
          src="https://thitruongit.vn/wp-content/uploads/2018/08/quy-%C4%91%E1%BB%8Bnh-chung.jpg"
        />
      </div>
      <Footer
        style={{
          background: '#FF8302',
          textAlign: 'center',
          height: 50,
          color: '#FFF',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </>
  );
};
export default Page;
