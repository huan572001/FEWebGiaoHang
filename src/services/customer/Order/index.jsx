import axiosClient from '../../axiosClient';
import { routerLinks } from '@/utils';
import { CUSTOMER_API_PATH } from '@/constant/api';

export const OrderService = {
  addOrderServices: async (data) => {
    try {
      return axiosClient.post(`${CUSTOMER_API_PATH}/createorder`, data);
    } catch (error) {}
  },
  addressSender: async (id, data) => {
    try {
      return axiosClient.put(
        `${CUSTOMER_API_PATH}/updateOrderSender/${id}`,
        data
      );
    } catch (error) {}
  },
  deleteOrder: async (id) => {
    try {
      return axiosClient.delete(`${CUSTOMER_API_PATH}/delete/${id}`);
    } catch (error) {}
  },
  updateOrder: async (id) => {
    try {
      return axiosClient.put(`${CUSTOMER_API_PATH}/updateOrder/${id}`);
    } catch (error) {}
  },
};
