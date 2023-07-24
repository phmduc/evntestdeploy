import actions from './actions';

const {BLOGS_UPDATE_BEGIN, BLOGS_UPDATE_ERR, BLOGS_UPDATE_SUCCESS, BLOGS_READ_BEGIN, BLOGS_READ_SUCCESS, BLOGS_READ_ERR, SINGLE_BLOG_BEGIN, SINGLE_BLOG_SUCCESS, SINGLE_BLOG_ERR, BLOGS_CREATE_BEGIN, BLOGS_CREATE_ERR, BLOGS_CREATE_SUCCESS, BLOGS_DELETE_BEGIN, BLOGS_DELETE_ERR, BLOGS_DELETE_SUCCESS } = actions;

const initialState = {
  blogs: [], // Thay `events` bằng key tương ứng với trạng thái bạn muốn lưu trữ dữ liệu
  loading: false,
  error: null,
};

const blogsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case BLOGS_UPDATE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case BLOGS_UPDATE_SUCCESS:
      return {
        ...state,
        blogs: data,
        loading: false,
      };
    case BLOGS_UPDATE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case BLOGS_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case BLOGS_READ_SUCCESS:
      return {
        ...state,
        blogs: data,
        loading: false,
      };
    case BLOGS_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
      case BLOGS_CREATE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case BLOGS_CREATE_SUCCESS:
      return {
        ...state,
        blogs: data,
        loading: false,
      };
    case BLOGS_CREATE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
      case BLOGS_DELETE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case BLOGS_DELETE_SUCCESS:
      return {
        ...state,
        blogs: data,
        loading: false,
      };
    case BLOGS_DELETE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

const initialStateSingle = {
  data: [],
  loading: false,
  error: null,
};

const SingleBlogReducer = (state = initialStateSingle, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_BLOG_BEGIN:
      return {
        ...initialStateSingle,
        loading: true,
      };
    case SINGLE_BLOG_SUCCESS:
      return {
        ...initialStateSingle,
        data,
        loading: false,
      };
    case SINGLE_BLOG_ERR:
      return {
        ...initialStateSingle,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleBlogReducer, blogsReducer };
