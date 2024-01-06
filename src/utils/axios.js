import axios from 'axios';
// config
import { HOST_API } from '../config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: HOST_API,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;


// import axios from 'axios';
// // config
// import { HOST_API } from '../config';
// import { LOCALSTORAGEPREFIX, SERVICE_URL } from '../redux/Service';
// import { useDispatch } from 'react-redux';
// import { loginOut } from '../redux/loginRedux/action/login-action';
// import { store } from '../redux/store';

// // ----------------------------------------------------------------------

// const axiosInstance = axios.create({
//   baseURL: HOST_API,
// });

// async function logOut() {
//   // const dispatch = useDispatch();
//   await store.dispatch(loginOut())
//   return;
// }

// let isRefreshing = false;

// const requestsQueue = [];

// async function refreshToken() {
//   let agentToken = localStorage.getItem(`${LOCALSTORAGEPREFIX}agentToken`);
//   let agentRefreshToken = localStorage.getItem(`${LOCALSTORAGEPREFIX}agentRefreshToken`);

//   try {
//     const response = await axios.post(SERVICE_URL.REFRESHTOKEN, {
//       accessToken: agentToken, refreshToken: agentRefreshToken
//     });
//     const { accessToken, refreshToken, status } = response.data;
//     if (status === 0) {
//       axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//       processQueue(null, accessToken);

//       localStorage.setItem(`${LOCALSTORAGEPREFIX}agentToken`, accessToken);
//       localStorage.setItem(`${LOCALSTORAGEPREFIX}agentRefreshToken`, refreshToken);

//       const newAccessToken = response.data.accessToken;

//       return newAccessToken;
//     }
//     else {
//       await logOut()
//       delete axios.defaults.headers.common.Authorization;
//     }
//   }
//   catch (error) {
//     await logOut()
//     return Promise.reject('Error refreshing token.');
//   } finally {
//     isRefreshing = false;
//   }

// }

// function processQueue(error, token = null) {
//   requestsQueue.forEach((prom) => {
//     if (error) {
//       prom.reject(error);
//     } else {
//       prom(token);
//     }
//   });
//   requestsQueue.length = 0;
// }

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     let originalRequest = error.config;
//     if (error.response && error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         if (!isRefreshing) {
//           isRefreshing = true;
//           let newAccessToken = refreshToken(originalRequest);
//           // originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//           return new Promise((resolve) => {
//             requestsQueue.push((token) => {
//               originalRequest.headers.Authorization = `Bearer ${token}`;
//               resolve(axiosInstance(originalRequest));
//             })
//           });
//         } else {
//           // return new Promise((resolve) => {
//           //   requestsQueue.push({ resolve, originalRequest });
//           // });
//           return new Promise((resolve) => {
//             requestsQueue.push((token) => {
//               originalRequest.headers.Authorization = `Bearer ${token}`;
//               resolve(axiosInstance(originalRequest));
//             });
//           });
//         }
//       } catch (refreshError) {

//         console.error('Refresh token failed:', refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }

// );
// export default axiosInstance;
