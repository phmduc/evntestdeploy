import actions from './actions';

const {GETWITHDRAWCOMMAND_READ_BEGIN, GETWITHDRAWCOMMAND_READ_ERR, GETWITHDRAWCOMMAND_READ_SUCCESS, LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERR, LOGOUT_BEGIN, LOGOUT_SUCCESS, LOGOUT_ERR, CLEAR_ERR, GETINFO_BEGIN, GETINFO_SUCCESS, GETINFO_ERR, GETPERPJ_BEGIN, GETPERPJ_ERR, GETPERPJ_SUCCESS ,WITHDRAWCOMMAND_READ_BEGIN, WITHDRAWCOMMAND_READ_ERR, WITHDRAWCOMMAND_READ_SUCCESS} = actions;

const initState = {
  loading: false,
  error: null,
};

/**
 *
 * @todo impure state mutation/explaination
 */
const AuthReducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: data,
        loading: false,
      };
    case LOGIN_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        login: data,
        loading: false,
      };
    case LOGOUT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case CLEAR_ERR:
      return {
        ...state,
        error: null,
        loading: false,
      };
      case GETINFO_BEGIN:
        return {
          ...state,
          loading: true,
        };
      case GETINFO_SUCCESS:
        return {
          ...state,
          login: data,
          loading: false,
        };
      case GETINFO_ERR:
        return {
          ...state,
          error: err,
          loading: false,
        };
    default:
      return state;
  }
};

const initStatePJ = {
  data: [],
  loading: false,
  error: null,
};

const projectauthReducer= (state = initStatePJ, action) =>{
  const { type, data, err } = action;
  switch (type) {
    case GETPERPJ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GETPERPJ_SUCCESS:
      return {
        ...state,
        pjs: data,
        loading: false,
      };
    case GETPERPJ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
}


const initStateCommand = {
  data: [],
  loading: false,
  error: null,
};
const commandReducer= (state = initStateCommand, action) =>{
  const { type, data, err } = action;
  switch (type) {
    case WITHDRAWCOMMAND_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case WITHDRAWCOMMAND_READ_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case WITHDRAWCOMMAND_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

      case GETWITHDRAWCOMMAND_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GETWITHDRAWCOMMAND_READ_SUCCESS:
      return {
        ...state,
        commands: data,
        loading: false,
      };
    case GETWITHDRAWCOMMAND_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
}


export {AuthReducer, projectauthReducer, commandReducer};
