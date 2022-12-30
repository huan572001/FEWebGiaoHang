import {
  CheckOutlined,
  HomeOutlined,
  PhoneOutlined,
  PlusCircleOutlined,
  RiseOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
const Layout = [
  {
    label: 'Nhận đơn hàng',
    key: 'Nhận đơn hàng',
    icon: <PlusCircleOutlined />,
  },
  {
    label: 'Danh sách đơn hàng',
    key: 'Danh sách đơn hàng',
    icon: <UnorderedListOutlined />,
  },
  {
    label: 'Quản lý doanh thu',
    key: 'Quản lý doanh thu',
    icon: <RiseOutlined />,
  },
  {
    label: 'Thông tin cá nhân',
    key: 'infoShipper',
    icon: <UserOutlined />,
  },
  {
    label: 'Hỗ trợ',
    key: 'report',
    icon: <PhoneOutlined />,
  },
];
export default Layout;
