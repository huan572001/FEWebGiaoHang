import axios from 'axios';
import auth from '@/utils/auth';
const axiosClient = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  // import.meta.env.REACT_APP_API_URL + import.meta.env.REACT_APP_API_VERSION,
  headers: {
    'Content-Type': 'application/json',
  },
  // paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const token = auth.getToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    // response config
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    // if ([401, 403].includes(error?.response?.status)) {
    //   const pattern = /auth/;
    //   if (!pattern.test(window.location.pathname)) {
    //     swal({
    //       title: `Thất bại`,
    //       text: `Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại.`,
    //       icon: 'warning',
    //       button: "Đăng nhập",
    //     }).then(() => {
    //       store.dispatch({ type: TOKEN_EXPIRES });
    //     })
    //   }
    //   else {
    //     store.dispatch({ type: TOKEN_EXPIRES });
    //   }
    // }
    // throw error;
  }
);

export default axiosClient;
// export const axiosClientPrivate = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   headers: {
//     'content-type': 'application/json',
//   },
//   withCredentials: false,
// });
