import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
import { toast } from 'react-toastify';
 
const {depCommandReadBegin, depCommandReadErr, depCommandReadSuccess,verifyAccountBegin, verifyAccountErr, verifyAccountSuccess ,getdepCommandReadBegin, getdepCommandReadErr, getdepCommandReadSuccess, addBankReadBegin, addBankReadErr, addBankReadSuccess ,getwithdrawCommandReadBegin, getwithdrawCommandReadErr, getwithdrawCommandReadSuccess, loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr, getinfoBegin, getinfoErr, getinfoSuccess, getauthpjBegin, getauthpjErr, getauthpjSuccess, withdrawCommandReadBegin, withdrawCommandReadSuccess, withdrawCommandReadErr } = actions;


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
        toast.success('Đăng nhập thành công')
      }
    } catch (err) {
      dispatch(loginErr(err.response.data.message));
      toast.error(err.response.data.message)

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
        toast.success('Đăng ký thành công')
      }
    } catch (err) {
      dispatch(loginErr(err));
      toast.error(err.response.data.message)
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

const withdrawCommand = (data, checkpass, callback) => {
  return async (dispatch) => {
    try {
      dispatch(withdrawCommandReadBegin());
      const response = await DataService.post('/wp-json/dbevn/v1/auth', checkpass);
      const initialState = await DataService.post('/wp-json/dbevn/v1/cash-requests/create', data);
      toast.success('Tạo lệnh rút thành công')
      callback()
    } catch (err) {
      dispatch(withdrawCommandReadErr(err.response.data.message));
      toast.error(err.response.data.message)
    }
  };  
};

const depCommand = (data) => {
  return async (dispatch) => {
    try {
      dispatch(depCommandReadBegin());
      const initialState = await DataService.post('/wp-json/dbevn/v1/deposit-requests/create', data);
      dispatch(depCommandReadSuccess(initialState.data));
      toast.success('Tạo lệnh nạp thành công')
    } catch (err) {
      dispatch(depCommandReadErr(err.response.data.message));
      toast.error(err.response.data.message)
    }
  };
};
const withdrawCommandGet = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getwithdrawCommandReadBegin());
      const initialState = await DataService.post(`/wp-json/dbevn/v1/cash-requests/user-${id}`);
      dispatch(getwithdrawCommandReadSuccess(initialState.data));
    } catch (err) {
      dispatch(getwithdrawCommandReadErr(err.response.data.message));
    }
  };
};

const depCommandGet = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getdepCommandReadBegin());
      const initialState = await DataService.post(`/wp-json/dbevn/v1/deposit-requests/user-${id}`);
      dispatch(getdepCommandReadSuccess(initialState.data));
    } catch (err) {
      dispatch(getdepCommandReadErr(err.response.data.message));
    }
  };
};

const addBank = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch(addBankReadBegin());
      const initialState1 = await DataService.post(`/wp-json/dbevn/v1/users/${id}/bank-account`,{bank_account: data.bank_account});
      const initialState2 = await DataService.post(`/wp-json/dbevn/v1/users/${id}/bank-name`,{bank_name: data.bank_name});
      dispatch(addBankReadSuccess(initialState1.data));
      dispatch(addBankReadSuccess(initialState2.data));
      toast.success('Thêm ngân hàng thành công')
    } catch (err) {
      dispatch(addBankReadErr(err.response.data.message));
      toast.error(err.response.data.message)
    }
  };
};

const removeBank = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch(addBankReadBegin());
      const initialState1 = await DataService.post(`/wp-json/dbevn/v1/users/${id}/bank-account`,{bank_account: data.bank_account});
      const initialState2 = await DataService.post(`/wp-json/dbevn/v1/users/${id}/bank-name`,{bank_name: data.bank_name});
      dispatch(addBankReadSuccess(initialState1.data));
      dispatch(addBankReadSuccess(initialState2.data));
      toast.success('Xoá tài khoản ngân hàng thành công')
    } catch (err) {
      dispatch(addBankReadErr(err.response.data.message));
      toast.error(err.response.data.message)
    }
  };
};

const verifyAccount= (id, data, callback, data2) => {
  return async (dispatch) => {
    try {
      dispatch(verifyAccountBegin());
      const initialState1 = await DataService.put(`/wp-json/dbevn/v1/users/${id}/upload-cccd-front`,{cccd_front: data[0]},{cccd_front: data[0]});
      const initialState2 = await DataService.put(`/wp-json/dbevn/v1/users/${id}/upload-cccd-back`,{cccd_back: data[1]},{cccd_back: data[1]});
      const initialState3 = await DataService.post(`/wp-json/dbevn/v1/verify/user-${id}`,data2);
      dispatch(verifyAccountSuccess(initialState1.data));
      dispatch(verifyAccountSuccess(initialState2.data));
      callback()
        } catch (err) {
      dispatch(verifyAccountErr(err.response.data.message));
      toast.error(err.response.data.message)
    }
  };
};

export { login, logOut, register ,getinfo, getauthpj , withdrawCommand, withdrawCommandGet, addBank, removeBank, depCommandGet , verifyAccount, depCommand};
