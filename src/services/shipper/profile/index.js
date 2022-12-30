import axiosClient from '../../axiosClient';
import { routerLinks } from '@/utils';
import { SHIPPER_API_PATH } from '@/constant/api';

export const ProfileShiperService = {
  updateInfo: async (id, data) => {
    try {
      return axiosClient.put(`${SHIPPER_API_PATH}/update/${id}`, data);
    } catch (error) {}
  },
};
