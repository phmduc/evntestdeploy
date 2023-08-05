import actions from './actions';

const { PROJECTS_READ_BEGIN, PROJECTS_READ_SUCCESS, PROJECTS_READ_ERR, PROJECTS_INVEST_BEGIN, PROJECTS_INVEST_ERR, PROJECTS_INVEST_SUCCESS} = actions;

const initialState = {
  projects: [], // Thay `events` bằng key tương ứng với trạng thái bạn muốn lưu trữ dữ liệu
  loading: false,
  error: null,
};

const projectsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
  
    case PROJECTS_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case PROJECTS_READ_SUCCESS:
      return {
        ...state,
        projects: data,
        loading: false,
      };
    case PROJECTS_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case PROJECTS_INVEST_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case PROJECTS_INVEST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case PROJECTS_INVEST_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};


export {  projectsReducer };
