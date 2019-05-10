import { combineReducers } from 'redux';
import { userReducer } from '../modules/user';

export const createRootReducer = () =>
  combineReducers({
    user: userReducer,
  });
