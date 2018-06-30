// import { HTTP } from './../utils/HTTP';

// import {
//   SESSION_REQUEST,
//   SESSION_SUCCESS,
//   UNAUTHORIZED,
//   LOGIN_SUCCESS
// } from '../constants/ActionTypes';

// import { AsyncStorage } from 'react-native';
// import { checkInternetConnection } from './auth'
// // Set User Push Notification ID
// export function setNotificationID(pushID) {
//   return function (dispatch) {
//     return new Promise(function (resolve, reject) {
//       {
//         console.log("Push Notification in Actions===========================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", pushID)
//         // API
//         // HTTP('get', 'user', null, token)
//         //   .then(function (response) {
//         //     console.log("Data Form get all users", response.data);
//         //     resolve(response.data);
//         //   })
//         //   .catch(error => {
//         //     console.log("error from get all users: ", error);
//         //     reject(error.response);
//         //   })
//       }
//     })
//   }
// }

// //checkSession
// export function checkSession(accessToken) {
//   return function (dispatch) {
//     return new Promise(function (resolve, reject) {
//       if (accessToken) {
//         HTTP('get', 'user/me', null, {
//           Authorization: accessToken
//         })
//           .then(function (response) {
//             console.log("authorized response: ", response);
//             dispatch({
//               type: SESSION_SUCCESS,
//               data: response.data
//             })
//             resolve(response.data);
//           })
//           .catch(error => {
//             console.log("error: ", error);
//             if (error.message !== "Network Error") {
//               dispatch({
//                 type: UNAUTHORIZED
//               })
//             }
//             reject(error.response)
//             checkInternetConnection(error);
//           })
//       }
//       else {
//         AsyncStorage.getItem('auth_token')
//           .then((token) => {
//             console.log(token, "----TOKEN----")
//             if (token) {
//               console.log("==================")
//               console.log("==================")
//               console.log("==================")
//               console.log("==================")
//               console.log("==================")
//               console.log("Before ME Call")
//               console.log("==================")
//               console.log("==================")
//               console.log("==================")
//               HTTP('get', 'user/me', null, {
//                 Authorization: token
//               })
//                 .then(function (response) {
//                   console.log("authorized response: ", response);
//                   dispatch({
//                     type: SESSION_SUCCESS,
//                     data: response.data
//                   })
//                   dispatch({
//                     type: LOGIN_SUCCESS,
//                     data: { token: token }
//                   })
//                   resolve(response.data);
//                 })
//                 .catch(error => {
//                   console.log("error: ", error);
//                   if (error.message !== "Network Error") {
//                     dispatch({
//                       type: UNAUTHORIZED
//                     })
//                   }
//                   reject(error.response)
//                   checkInternetConnection(error);
//                 })

//             } else {
//               console.log("Else Condition")
//               reject({ data: 'Unauthorized' });
//             }
//           })
//       }
//       {
//       }
//     });
//   }
// }


// // Get All Users
// export function getAllUsers(token, query) {
//   return function (dispatch) {
//     return new Promise(function (resolve, reject) {
//       {
//         // API
//         HTTP('get', 'user?page=' + query.page + '&search=' + query.text, null, token)
//           .then(function (response) {
//             console.log("Data Form get all users", response.data);
//             resolve(response.data);
//           })
//           .catch(error => {
//             console.log("error from get all users: ", error);
//             reject(error.response);
//             checkInternetConnection(error);

//           })
//       }
//     })
//   }
// }

// Get specific User
// export function getUser(token, id) {
//   return function (dispatch) {
//     return new Promise(function (resolve, reject) {
//       {
//         // API
//         HTTP('get', 'user/' + id, null, token)
//           .then(function (response) {
//             console.log("Data of specific user", response.data);
//             resolve(response.data);
//           })
//           .catch(error => {
//             console.log("error of specific user: ", error);
//             reject(error.response);
//             checkInternetConnection(error);

//           })
//       }
//     })
//   }
// }
