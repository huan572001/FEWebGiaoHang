import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routerLinks } from '@/utils';
const Page = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate(routerLinks('Login'))}>Đăng nhập</Button>
      <Button onClick={() => navigate(routerLinks('Register'))}>Đăng ký</Button>
    </>
  );
};
export default Page;
