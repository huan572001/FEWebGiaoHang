import axiosClient from '../../axiosClient';
import { CUSTOMER_API_PATH } from '@/constant/api';

export const CustomerReceiveService = {
  getAllOrder: async () => {
    try {
      return axiosClient.get(`${CUSTOMER_API_PATH}/getall`);
    } catch (error) {}
  },
  getAllOrderById: async (id) => {
    try {
      return axiosClient.get(`${CUSTOMER_API_PATH}/getorder/${id}`);
    } catch (error) {}
  },
};
