import axiosClient from '../axiosClient';
import { routerLinks } from '@/utils';
import { ADMIN_API_PATH } from '@/constant/api';

export const AdminService = {
  lock: async (id) => {
    try {
      return axiosClient.put(`${ADMIN_API_PATH}/lockuser/${id}`);
    } catch (error) {}
  },
  unLock: async (id) => {
    try {
      return axiosClient.put(`${ADMIN_API_PATH}/unlockuser/${id}`);
    } catch (error) {}
  },
};
