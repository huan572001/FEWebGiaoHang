import axiosClient from '../../axiosClient';
import { routerLinks } from '@/utils';
import { ADMIN_API_PATH, CUSTOMER_API_PATH } from '@/constant/api';

export const ReportServicer = {
  getAllUserReport: async () => {
    try {
      return axiosClient.get(`${ADMIN_API_PATH}/getuserreport`);
    } catch (error) {}
  },
  postReport: async (data, id) => {
    try {
      return axiosClient.post(`${ADMIN_API_PATH}/report/${id}`, data);
    } catch (error) {}
  },
  getAllReportById: async (id) => {
    try {
      return axiosClient.get(`${ADMIN_API_PATH}/getreportid/${id}`);
    } catch (error) {}
  },
  createreport: async (data) => {
    try {
      return axiosClient.post(`${CUSTOMER_API_PATH}/createreport`, data);
    } catch (error) {}
  },
};
