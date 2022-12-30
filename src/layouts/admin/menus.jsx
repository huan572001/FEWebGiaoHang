import {
  EditOutlined,
  HomeOutlined,
  OrderedListOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
const Layout = [
  {
    label: 'Tạo đơn hàng',
    key: 'Tạo đơn hàng',
    icon: <EditOutlined />,
  },
  {
    label: 'Quản lý đơn hàng',
    key: 'Quản lý đơn hàng',
    icon: <OrderedListOutlined />,
  },
  {
    label: 'Thông tin cá nhân',
    key: 'infoCustomer',
    icon: <UserOutlined />,
  },
  {
    label: 'Hỗ trợ',
    key: 'Hỗ trợ',
    icon: <PhoneOutlined />,
  },
];
export default Layout;
