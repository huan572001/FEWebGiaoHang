import {
  ExclamationCircleOutlined,
  HomeOutlined,
  ReadOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
const Layout = [
  {
    label: 'Quản lý khách hàng',
    key: 'Quản lý khách hàng',
    icon: <UsergroupAddOutlined />,
  },
  {
    label: 'Quản lý shipper',
    key: 'Quản lý shipper',
    icon: <UserOutlined />,
  },
  {
    label: 'Đơn hàng',
    key: 'Đơn hàng',
    icon: <ReadOutlined />,
  },
  {
    label: 'Quản lý report',
    key: 'Quản lý report',
    icon: <ExclamationCircleOutlined />,
  },
];
export default Layout;
