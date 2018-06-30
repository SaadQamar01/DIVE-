import { HTTP } from './../utils/HTTP';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FACEBOOK_LOGIN_REQUEST,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  TWITTER_LOGIN_REQUEST,
  TWITTER_LOGIN_SUCCESS,
  TWITTER_LOGIN_FAIL,
  GMAIL_LOGIN_REQUEST,
  GMAIL_LOGIN_SUCCESS,
  GMAIL_LOGIN_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  FORGET_PASSOWRD_REQUEST,
  FORGET_PASSOWRD_SUCCESS,
  FORGET_PASSOWRD_FAIL,
  REMOVE_AVAILIBILITIES_SUCCESS,
  UNAUTHORIZED,
  UPDATE_LANGUAGE,
  GET_TOTAL_NOTIFICATIONS,
  HIDE_LOADER
} from '../constants/ActionTypes';


// Check Network Error 

// export function checkInternetConnection(error) {
//   if (error.message === 'Network Error') {
//     Toast.show({
//       text: 'Please Check Your Internet Connection',
//       position: 'bottom',
//       duration: 10000,
//       buttonText: 'Okay'
//     })
//   }

// }

//Login
export function loginRequest(data) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      console.log("login action++++++++++++")
      {
        dispatch({
          type: LOGIN_SUCCESS
        })

        // API
        HTTP('post', 'v1/api/user/login', data)
          .then(function (response) {
            console.log("login user response: ", response.data);
            dispatch({
              type: LOGIN_SUCCESS,
              data: response.data
            })
            resolve(response.data);
          })
          .catch(error => {
            console.log("error: ", error.message);
            dispatch({
              type: LOGIN_FAIL
            })
            reject(error.response);
          })
      }
    })
  }
}
//Signup
export function signupRequest(data) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      console.log("signup action++++++++++++")
      {
        dispatch({
          type: SIGNUP_REQUEST
        })

        // API
        HTTP('post', 'v1/api/user/signup', data)
          .then(function (response) {
            console.log("signup user response: ", response.data);
            dispatch({
              type: SIGNUP_SUCCESS,
              data: response.data
            })
            resolve(response.data);
          })
          .catch(error => {
            console.log("error: ", error.message);
            dispatch({
              type: SIGNUP_FAIL
            })
            reject(error.response);
          })
      }
    })
  }
}
//facebook Login
export function facebookLogin(data) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      console.log("login action++++++++++++")
      {
        dispatch({
          type: FACEBOOK_LOGIN_REQUEST
        })

        // API
        HTTP('post', 'auth/facebook', data)
          .then(function (response) {
            console.log("login user response: ", response.data);
            dispatch({
              type: FACEBOOK_LOGIN_SUCCESS,
              data: response.data
            })
            resolve(response.data);
          })
          .catch(error => {
            console.log("error: ", error.message);
            dispatch({
              type: FACEBOOK_LOGIN_FAIL
            })
            reject(error.response);
          })
      }
    })
  }
}

//twitter Login
export function twitterLogin(data) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      console.log("login action++++++++++++")
      {
        dispatch({
          type: TWITTER_LOGIN_REQUEST
        })

        // API
        HTTP('get', 'auth/twitter', data)
          .then(function (response) {
            console.log("login user response: ", response.data);
            dispatch({
              type: TWITTER_LOGIN_SUCCESS,
              data: response.data
            })
            resolve(response.data);
          })
          .catch(error => {
            console.log("error: ", error.message);
            dispatch({
              type: TWITTER_LOGIN_FAIL
            })
            reject(error.response);
          })
      }
    })
  }
}


// Login
export function gmailLogin(data) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      console.log("login action++++++++++++")
      {
        dispatch({
          type: GMAIL_LOGIN_REQUEST
        })

        // API
        HTTP('get', 'auth/gmail', data)
          .then(function (response) {
            console.log("login user response: ", response.data);
            dispatch({
              type: GMAIL_LOGIN_SUCCESS,
              data: response.data
            })
            resolve(response.data);
          })
          .catch(error => {
            console.log("error: ", error.message);
            dispatch({
              type: GMAIL_LOGIN_FAIL
            })
            reject(error.response);
          })
      }
    })
  }
}