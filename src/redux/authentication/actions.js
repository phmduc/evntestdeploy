const actions = {
  LOGIN_BEGIN: 'LOGIN_BEGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERR: 'LOGIN_ERR',

  LOGOUT_BEGIN: 'LOGOUT_BEGIN',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_ERR: 'LOGOUT_ERR',

  GETINFO_BEGIN: 'GETINFO_BEGIN',
  GETINFO_SUCCESS: 'GETINFO_SUCCESS',
  GETINFO_ERR: 'GETINFO_ERR',

  GETPERPJ_BEGIN: 'GETPERPJ_BEGIN',
  GETPERPJ_SUCCESS: 'GETPERPJ_SUCCESS',
  GETPERPJ_ERR: 'GETPERPJ_ERR',

  WITHDRAWCOMMAND_READ_BEGIN: 'WITHDRAWCOMMAND_READ_BEGIN',
  WITHDRAWCOMMAND_READ_SUCCESS: 'WITHDRAWCOMMAND_READ_SUCCESS',
  WITHDRAWCOMMAND_READ_ERR: 'WITHDRAWCOMMAND_READ_ERR',

  GETWITHDRAWCOMMAND_READ_BEGIN: 'GETWITHDRAWCOMMAND_READ_BEGIN',
  GETWITHDRAWCOMMAND_READ_SUCCESS: 'GETWITHDRAWCOMMAND_READ_SUCCESS',
  GETWITHDRAWCOMMAND_READ_ERR: 'GETWITHDRAWCOMMAND_READ_ERR',

  GETDEPCOMMAND_READ_BEGIN: 'GETDEPCOMMAND_READ_BEGIN',
  GETDEPCOMMAND_READ_SUCCESS: 'GETDEPCOMMAND_READ_SUCCESS',
  GETDEPCOMMAND_READ_ERR: 'GETDEPCOMMAND_READ_ERR',

  
  DEPCOMMAND_READ_BEGIN: 'DEPCOMMAND_READ_BEGIN',
  DEPCOMMAND_READ_SUCCESS: 'DEPCOMMAND_READ_SUCCESS',
  DEPCOMMAND_READ_ERR: 'DEPCOMMAND_READ_ERR',

  VERIFYACCOUNT_READ_BEGIN: 'VERIFYACCOUNT_READ_BEGIN',
  VERIFYACCOUNT_READ_SUCCESS: 'VERIFYACCOUNT_READ_SUCCESS',
  VERIFYACCOUNT_READ_ERR: 'VERIFYACCOUNT_READ_ERR',

  ADDBANK_READ_BEGIN: 'ADDBANK_READ_BEGIN',
  ADDBANK_READ_SUCCESS: 'ADDBANK_READ_SUCCESS',
  ADDBANK_READ_ERR: 'ADDBANK_READ_ERR',


  CLEAR_ERR: 'CLEAR_ERR',



  loginBegin: () => {
    return {
      type: actions.LOGIN_BEGIN,
    };
  },

  loginSuccess: (data) => {
    return {
      type: actions.LOGIN_SUCCESS,
      data,
    };
  },

  loginErr: (err) => {
    return {
      type: actions.LOGIN_ERR,
      err,
    };
  },

  clearErr: () => {
    return {
      type: actions.CLEAR_ERR,
    };
  },

  logoutBegin: () => {
    return {
      type: actions.LOGOUT_BEGIN,
    };
  },

  logoutSuccess: (data) => {
    return {
      type: actions.LOGOUT_SUCCESS,
      data,
    };
  },

  logoutErr: (err) => {
    return {
      type: actions.LOGOUT_ERR,
      err,
    };
  },

  getinfoBegin: () => {
    return {
      type: actions.GETINFO_BEGIN,
    };
  },

  getinfoSuccess: (data) => {
    return {
      type: actions.GETINFO_SUCCESS,
      data,
    };
  },

  getinfoErr: (err) => {
    return {
      type: actions.GETINFO_ERR,
      err,
    };
  },


  getauthpjBegin: () => {
    return {
      type: actions.GETPERPJ_BEGIN,
    };
  },

  getauthpjSuccess: (data) => {
    return {
      type: actions.GETPERPJ_SUCCESS,
      data,
    };
  },

  getauthpjErr: (err) => {
    return {
      type: actions.GETPERPJ_ERR,
      err,
    };
  },

  withdrawCommandReadBegin: () => {
    return {
      type: actions.WITHDRAWCOMMAND_READ_BEGIN,
    };
  },

  withdrawCommandReadSuccess: (data) => {
    return {
      type: actions.WITHDRAWCOMMAND_READ_SUCCESS,
      data,
    };
  },

  withdrawCommandReadErr: (err) => {
    return {
      type: actions.WITHDRAWCOMMAND_READ_ERR,
      err,
    };
  },

  depCommandReadBegin: () => {
    return {
      type: actions.DEPCOMMAND_READ_BEGIN,
    };
  },

  depCommandReadSuccess: (data) => {
    return {
      type: actions.DEPCOMMAND_READ_SUCCESS,
      data,
    };
  },

  depCommandReadErr: (err) => {
    return {
      type: actions.DEPCOMMAND_READ_ERR,
      err,
    };
  },

  getwithdrawCommandReadBegin: () => {
    return {
      type: actions.GETWITHDRAWCOMMAND_READ_BEGIN,
    };
  },

  getwithdrawCommandReadSuccess: (data) => {
    return {
      type: actions.GETWITHDRAWCOMMAND_READ_SUCCESS,
      data,
    };
  },

  getwithdrawCommandReadErr: (err) => {
    return {
      type: actions.GETWITHDRAWCOMMAND_READ_ERR,
      err,
    };
  },

  getdepCommandReadBegin: () => {
    return {
      type: actions.GETDEPCOMMAND_READ_BEGIN,
    };
  },

  getdepCommandReadSuccess: (data) => {
    return {
      type: actions.GETDEPCOMMAND_READ_SUCCESS,
      data,
    };
  },

  getdepCommandReadErr: (err) => {
    return {
      type: actions.GETDEPCOMMAND_READ_ERR,
      err,
    };
  },

  addBankReadBegin: () => {
    return {
      type: actions.ADDBANK_READ_BEGIN,
    };
  },

  addBankReadSuccess: (data) => {
    return {
      type: actions.ADDBANK_READ_SUCCESS,
    };
  },

  addBankReadErr: (err) => {
    return {
      type: actions.ADDBANK_READ_ERR,
      err,
    };
  },

  verifyAccountBegin: () => {
    return {
      type: actions.VERIFYACCOUNT_READ_BEGIN,
    };
  },

  verifyAccountSuccess: (data) => {
    return {
      type: actions.VERIFYACCOUNT_READ_SUCCESS,
    };
  },

  verifyAccountErr: (err) => {
    return {
      type: actions.VERIFYACCOUNT_READ_ERR,
      err,
    };
  },
};

export default actions;
