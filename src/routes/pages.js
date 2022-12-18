import React from 'react';
import { routerLinks } from '../utils';
export const pages = [
  {
    layout: React.lazy(() => import('../layouts/auth')),
    isPublic: true,
    child: [
      {
        path: routerLinks('Login'),
        component: React.lazy(() => import('./auth/login')),
        title: 'Login',
      },
      {
        path: routerLinks('Register'),
        component: React.lazy(() => import('./auth/register')),
        title: 'register',
      },
      {
        path: routerLinks('Dashboard'),
        component: React.lazy(() => import('./auth/dashboard')),
        title: 'Dashboard',
      },
    ],
  },
  {
    layout: React.lazy(() => import('../layouts/admin')),
    isPublic: false,
    child: [
      {
        path: routerLinks('Customer'),
        component: React.lazy(() => import('./admin/dashboard')),
        title: 'Dashboard',
      },
      {
        path: routerLinks('Tạo đơn hàng'),
        component: React.lazy(() => import('./admin/createOrder')),
        title: 'Tạo đơn hàng',
      },
      {
        path: routerLinks('Quản lý đơn hàng'),
        component: React.lazy(() => import('./admin/Order')),
        title: 'Quản lý đơn hàng',
      },
      {
        path: routerLinks('Hỗ trợ'),
        component: React.lazy(() => import('./admin/support')),
        title: 'Quản lý đơn hàng',
      },
      // {
      //   path: routerLinks('Quản lý doanh thu'),
      //   component: React.lazy(() => import('./admin/account/systemAccount')),
      //   title: 'Quản lý doanh thu',
      // },
      // {
      //   path: routerLinks('Hỗ trợ'),
      //   component: React.lazy(() => import('./admin/account/role')),
      //   title: 'Hỗ trợ',
      // },
    ], // 💬 generate link to here
  },
  {
    layout: React.lazy(() => import('../layouts/shipper')),
    isPublic: false,
    child: [
      {
        path: routerLinks('Shipper'),
        component: React.lazy(() => import('./shipper/dashboard')),
        title: 'Dashboard',
      },
      {
        path: routerLinks('Nhận đơn hàng'),
        component: React.lazy(() => import('./shipper/receive')),
        title: 'Dashboard',
      },
      {
        path: routerLinks('Danh sách đơn hàng'),
        component: React.lazy(() => import('./shipper/order')),
        title: 'order',
      },
    ], // 💬 generate link to here
  },
  {
    layout: React.lazy(() => import('../layouts/webadmin')),
    isPublic: false,
    child: [
      {
        path: routerLinks('Admin'),
        component: React.lazy(() => import('./webadmin/dashboard')),
        title: 'Quản lý khách hàng',
      },
      {
        path: routerLinks('Quản lý khách hàng'),
        component: React.lazy(() => import('./webadmin/customer')),
        title: 'Quản lý khách hàng',
      },
      {
        path: routerLinks('Quản lý shipper'),
        component: React.lazy(() => import('./webadmin/shipper')),
        title: 'Quản lý shipper',
      },
      {
        path: routerLinks('Đơn hàng'),
        component: React.lazy(() => import('./webadmin/order')),
        title: 'Đơn hàng',
      },
      {
        path: routerLinks('Quản lý report'),
        component: React.lazy(() => import('./webadmin/report')),
        title: 'Quản lý report',
      },
    ], // 💬 generate link to here
  },
];

export const arrayPaths = [];
pages.map((layout) => {
  const paths = [];
  layout.child.map((page) => {
    paths.push(page.path);

    return page;
  });
  arrayPaths.push(paths);
  return layout;
});
