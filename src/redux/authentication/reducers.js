import actions from './actions';

const { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERR, LOGOUT_BEGIN, LOGOUT_SUCCESS, LOGOUT_ERR, CLEAR_ERR, GETINFO_BEGIN, GETINFO_SUCCESS, GETINFO_ERR, GETPERPJ_BEGIN, GETPERPJ_ERR, GETPERPJ_SUCCESS } = actions;

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
  data: {},
  loading: false,
  error: null,
};

const projectauthReducer= (state = initState, action) =>{
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
export {AuthReducer, projectauthReducer};
