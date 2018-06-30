
/* Actions */
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
  SESSION_REQUEST,
  SESSION_SUCCESS,
  GET_TOTAL_NOTIFICATIONS,
  UNAUTHORIZED,
  UPDATE_LANGUAGE
} from './../constants/ActionTypes';

import initialState from '../store/initialState';
const auth_reducer = (state = initialState.auth, action) => {
  switch (action.type) {



    /* LOGIN ACTIONS */
    // request
    case LOGIN_REQUEST:
      console.log(LOGIN_REQUEST);
      return state;
    // success
    case LOGIN_SUCCESS:
      console.log(LOGIN_SUCCESS);
      console.log(action.data, "============Action data===========")
      localStorage.setItem('auth_token', action.data.token);
      // return Object.assign(
      //   {},
      //   state,
      //   {
      //     token: action.data.token
      //   }
      // );
    // fail
    case LOGIN_FAIL:
      console.log(LOGIN_FAIL);
      return state;


    /* CHECK SESSION ACTIONS */
    // request
    case SESSION_REQUEST:
      console.log(SESSION_REQUEST);
    // success
    case SESSION_SUCCESS:
      console.log(SESSION_SUCCESS);
      return Object.assign(
        {},
        state,
        {
          user: action.data,
        }
      );
    case UNAUTHORIZED:
      console.log(UNAUTHORIZED)
      // AsyncStorage.removeItem('auth_token');
      return state = {}


    case GET_TOTAL_NOTIFICATIONS:
      console.log(GET_TOTAL_NOTIFICATIONS);
      return Object.assign(
        {},
        state,
        {
          newNotifications: action.data.data
        }
      );

    /* FACEBOOK LOGIN ACTIONS */
    // request
    case FACEBOOK_LOGIN_REQUEST:
      console.log(FACEBOOK_LOGIN_REQUEST);
      return state;
    // success
    case FACEBOOK_LOGIN_SUCCESS:
      console.log(FACEBOOK_LOGIN_SUCCESS);
      // AsyncStorage.setItem('auth_token', action.data.token);
      return Object.assign(
        {},
        state,
        {
          token: action.data.token
        }
      );
    // fail
    case FACEBOOK_LOGIN_FAIL:
      console.log(FACEBOOK_LOGIN_FAIL);
      return state;


    /* TWITTER LOGIN ACTIONS */
    // request
    case TWITTER_LOGIN_REQUEST:
      console.log(TWITTER_LOGIN_REQUEST);
      return state;
    // success
    case TWITTER_LOGIN_SUCCESS:
      console.log(TWITTER_LOGIN_SUCCESS);
      // AsyncStorage.setItem('auth_token', action.data.token);
      return Object.assign(
        {},
        state,
        {
          token: action.data.token
        }
      );
    // fail
    case TWITTER_LOGIN_FAIL:
      console.log(TWITTER_LOGIN_FAIL);
      return state;



    /* GMAIL LOGIN ACTIONS */
    // request
    case GMAIL_LOGIN_REQUEST:
      console.log(GMAIL_LOGIN_REQUEST);
      return state;
    // success
    case GMAIL_LOGIN_SUCCESS:
      console.log(GMAIL_LOGIN_SUCCESS);
      // AsyncStorage.setItem('auth_token', action.data.token);
      return Object.assign(
        {},
        state,
        {
          token: action.data.token
        }
      );
    // fail
    case GMAIL_LOGIN_FAIL:
      console.log(GMAIL_LOGIN_FAIL);
      return state;



    /* SIGNUP ACTIONS */
    // request
    case SIGNUP_REQUEST:
      console.log(SIGNUP_REQUEST);
      return state;
    // success
    case SIGNUP_SUCCESS:
      console.log(SIGNUP_SUCCESS);
      localStorage.setItem('auth_token', action.data.token);
      return Object.assign(
        {},
        state,
        {
          token: action.data.token
        }
      );
    // fail
    case SIGNUP_FAIL:
      console.log(SIGNUP_FAIL);
      return state;



    /* LOGOUT ACTIONS */
    // request
    case LOGOUT_REQUEST:
      console.log(LOGOUT_REQUEST);
      return state = {};
    // success
    case LOGOUT_SUCCESS:
      console.log(LOGOUT_SUCCESS);
      return Object.assign(
        {},
        state,
        {
          user: null,
        }
      );
    // fail
    case LOGOUT_FAIL:
      console.log(LOGOUT_FAIL)
      return state;


    /* UPDATE PROFILE ACTIONS */
    // request
    case UPDATE_PROFILE_REQUEST:
      console.log(UPDATE_PROFILE_REQUEST);
      return state;
    // success
    case UPDATE_PROFILE_SUCCESS:
      console.log(UPDATE_PROFILE_SUCCESS);
      console.log(action.data.user, "++++++++++++++++++++++REDUCER DATA+++++++=")
      return Object.assign(
        {},
        state,
        {
          user: { ...action.data.user }
        }
      );
    // fail
    case UPDATE_PROFILE_FAIL:
      console.log(UPDATE_PROFILE_FAIL);
      return state;


    case UPDATE_LANGUAGE:
      console.log(UPDATE_LANGUAGE);
      // AsyncStorage.setItem('language', action.data.language);
      return Object.assign(
        {},
        state,
        {
          language: action.data.language
        }
      );


    /* FORGETPASSWORD ACTIONS */
    // request
    case FORGET_PASSOWRD_REQUEST:
      console.log(FORGET_PASSOWRD_REQUEST);
      return state;
    // success
    case FORGET_PASSOWRD_SUCCESS:
      console.log(FORGET_PASSOWRD_SUCCESS);
      // localStorage.removeItem('@agora:token');
      return state;
    // fail
    case FORGET_PASSOWRD_FAIL:
      console.log(FORGET_PASSOWRD_FAIL)
      return state;


    default:
      return state;
  }
};

export default auth_reducer;
