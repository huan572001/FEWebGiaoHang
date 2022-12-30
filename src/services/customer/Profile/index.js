import axiosClient from '../../axiosClient';
import { routerLinks } from '@/utils';
import { CUSTOMER_API_PATH } from '@/constant/api';

export const ProfileCustomerService = {
  updateInfo: async (id, data) => {
    console.log(data);

    try {
      return axiosClient.put(`${CUSTOMER_API_PATH}/update/${id}`, data);
    } catch (error) {}
  },
};
