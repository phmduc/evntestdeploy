import actions from './actions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataService } from '../../config/dataService/dataService';
 
const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;


const login = (values, callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('/wp-json/dbevn/v1/auth', values);
      if (response.data) {
        sessionStorage.setItem('user_id', response.data.user_id);
        sessionStorage.setItem('username', response.data.username);
        sessionStorage.setItem('phone', response.data.phone);
        sessionStorage.setItem('role', response.data.role);
        dispatch(loginSuccess(true));
        callback();
      }
    } catch (err) {
      dispatch(loginErr(err.response.data.message));
    }
  };
};

const register = (values, callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('/wp-json/dbevn/v1/reg', values);
      if (response.data) {
        dispatch(loginSuccess(true));
        callback();
      }
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = (callback) => {
  return async (dispatch) => {
    dispatch(logoutBegin());
    try {
      sessionStorage.clear();
      dispatch(logoutSuccess(false));
      callback();
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut, register };
