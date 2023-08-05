import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
 
const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr, getinfoBegin, getinfoErr, getinfoSuccess, getauthpjBegin, getauthpjErr, getauthpjSuccess } = actions;


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

const getinfo = (id) => {
  return async (dispatch) => {
    dispatch(getinfoBegin());
    try {
      const response = await DataService.get(`/wp-json/dbevn/v1/users/${id}/details`);
      if (response.data) {
        dispatch(getinfoSuccess(response.data));
      }
    } catch (err) {
      dispatch(getinfoErr(err.response.data.message));
    }
  };
};
const getauthpj = (id) => {
  return async (dispatch) => {
    dispatch(getauthpjBegin());
    try {
      const response = await DataService.post(`/wp-json/dbevn/v1/orders/user-${id}`);
      if (response.data) {
        dispatch(getauthpjSuccess(response.data));
      }
    } catch (err) {
      dispatch(getauthpjErr(err.response.data.message));
    }
  };
};
export { login, logOut, register ,getinfo, getauthpj };
