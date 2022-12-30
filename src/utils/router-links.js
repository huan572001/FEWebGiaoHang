const Util = (name) => {
  const array = {
    Login: '/auth/login',
    Register: '/auth/register',
    Dashboard: '/',
    forgotPassword: '/forgotPassword',

    Customer: '/customer',
    'Tạo đơn hàng': '/user',
    'Quản lý đơn hàng': '/userAccount',
    'Quản lý doanh thu': '/revenue',
    'Hỗ trợ': 'roleAccount',
    infoCustomer: '/infoCustomer',
    //shipper
    Shipper: '/shipper',
    'Nhận đơn hàng': '/receive',
    'Danh sách đơn hàng': '/listOder',
    infoShipper: '/infoShipper',
    report: '/report',

    Admin: '/admin',
    'Quản lý khách hàng': '/admin/customer',
    'Quản lý shipper': '/admin/shiper',
    'Đơn hàng': '/admin/order',
    'Quản lý report': '/admin/report',
  }; // 💬 generate link to here

  // const apis = {
  //   Dashboard: '/dashboard',
  //   User: 'users',
  // }; // 💬 generate api to here

  return array[name];
};
export default Util;
