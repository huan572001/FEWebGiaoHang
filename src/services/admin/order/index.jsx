import axiosClient from '../../axiosClient';
import { routerLinks } from '@/utils';
import { ADMIN_API_PATH } from '@/constant/api';

export const AdminOrderService = {
  getAllOrder: async () => {
    try {
      return axiosClient.get(`${ADMIN_API_PATH}/getallc`);
    } catch (error) {}
  },
};
