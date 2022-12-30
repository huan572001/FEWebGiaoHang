import axiosClient from '../axiosClient';
import { USER_API_PATH } from '@/constant/api';
// import { Message } from 'components';
// import { keyRefreshToken, keyToken } from 'variable';

export const UserService = {
  login: async (values) => {
    try {
      return axiosClient.post(`${USER_API_PATH}/login`, values);
    } catch (e) {
      console.error(e);
      if (e.response.data.message) {
        // Message.error({ text: e.response.data.message });
      }
      return false;
    }
  },
  registerUser: async (values) => {
    try {
      return axiosClient.post(`${USER_API_PATH}/register`, values);
    } catch (e) {
      console.error(e);
      if (e.response.data.message) {
        // Message.error({ text: e.response.data.message });
      }
      return false;
    }
  },
  registerShipper: async (values) => {
    try {
      return axiosClient.post(`${USER_API_PATH}/register`, values);
    } catch (e) {
      console.error(e);
      if (e.response.data.message) {
        // Message.error({ text: e.response.data.message });
      }
      return false;
    }
  },
  getCustomerById: async () => {
    try {
      return axiosClient.get(`/auth/info`);
    } catch (e) {
      console.error(e);
      if (e.response.data.message) {
        // Message.error({ text: e.response.data.message });
      }
      return false;
    }
  },
  resetPassword: async (data) => {
    try {
      return axiosClient.put(`/auth/reset`, data);
    } catch (e) {
      console.error(e);
      if (e.response.data.message) {
        // Message.error({ text: e.response.data.message });
      }
      return false;
    }
  },
  forgotPassword: async (data) => {
    try {
      return axiosClient.post(`/auth/forgot`, data);
    } catch (e) {
      console.error(e);
      if (e.response.data.message) {
        // Message.error({ text: e.response.data.message });
      }
      return false;
    }
  },
};
