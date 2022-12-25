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
};
