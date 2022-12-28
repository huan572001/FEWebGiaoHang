import axiosClient from '../../axiosClient';
import { SHIPPER_API_PATH } from '@/constant/api';

export const ShipperReceiveService = {
  getAllOrder: async () => {
    try {
      return axiosClient.get(`${SHIPPER_API_PATH}/getall`);
    } catch (error) {}
  },
  shipperReciever: async (id) => {
    try {
      return axiosClient.put(`${SHIPPER_API_PATH}/shipperreciever/${id}`);
    } catch (error) {}
  },
  getallreciever: async () => {
    try {
      return axiosClient.get(`${SHIPPER_API_PATH}/getallreciever`);
    } catch (error) {}
  },
  shipperrecieverdone: async (id) => {
    try {
      return axiosClient.put(`${SHIPPER_API_PATH}/shipperrecieverdone/${id}`);
    } catch (error) {}
  },
};
