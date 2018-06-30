import { combineReducers } from 'redux';

import auth from './auth';
import isLoading from "./loader";


const reducers = {
  auth,
  isLoading,
};

export default  combineReducers(reducers);
