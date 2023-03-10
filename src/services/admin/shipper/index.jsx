import axiosClient from '../../axiosClient';
import { routerLinks } from '@/utils';
import { ADMIN_API_PATH } from '@/constant/api';

export const AdminShiperService = {
  getAllShipper: async () => {
    try {
      return axiosClient.get(`${ADMIN_API_PATH}/getalls`);
    } catch (error) {}
  },
};
