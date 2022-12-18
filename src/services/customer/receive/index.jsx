import axiosClient from '../../axiosClient';
import { CUSTOMER_API_PATH } from '@/constant/api';

export const CustomerReceiveService = {
  getAllOrder: async () => {
    try {
      return axiosClient.get(`${CUSTOMER_API_PATH}/getall`);
    } catch (error) {}
  },
  // shipperReciever: async (id) => {
  //   try {
  //     return axiosClient.put(`${CUSTOMER_API_PATH}/shipperreciever/${id}`);
  //   } catch (error) {}
  // },
};
