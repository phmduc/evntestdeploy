const actions = {
  BLOGS_READ_BEGIN: 'BLOGS_READ_BEGIN',
  BLOGS_READ_SUCCESS: 'BLOGS_READ_SUCCESS',
  BLOGS_READ_ERR: 'BLOGS_READ_ERR',

  BLOGS_CREATE_BEGIN: 'BLOGS_CREATE_BEGIN',
  BLOGS_CREATE_SUCCESS: 'BLOGS_CREATE_SUCCESS',
  BLOGS_CREATE_ERR: 'BLOGS_CREATE_ERR',

  BLOGS_UPDATE_BEGIN: 'BLOGS_UPDATE_BEGIN',
  BLOGS_UPDATE_SUCCESS: 'BLOGS_UPDATE_SUCCESS',
  BLOGS_UPDATE_ERR: 'BLOGS_UPDATE_ERR',

  BLOGS_DELETE_BEGIN: 'BLOGS_DELETE_BEGIN',
  BLOGS_DELETE_SUCCESS: 'BLOGS_DELETE_SUCCESS',
  BLOGS_DELETE_ERR: 'BLOGS_DELETE_ERR',

  SINGLE_BLOG_BEGIN: 'SINGLE_BLOG_BEGIN',
  SINGLE_BLOG_SUCCESS: 'SINGLE_BLOG_SUCCESS',
  SINGLE_BLOG_ERR: 'SINGLE_BLOG_ERR',

  starUpdateBegin: () => {
    return {
      type: actions.BLOGS_UPDATE_BEGIN,
    };
  },

  starUpdateSuccess: (data) => {
    return {
      type: actions.BLOGS_UPDATE_SUCCESS,
      data,
    };
  },

  starUpdateErr: (err) => {
    return {
      type: actions.BLOGS_UPDATE_ERR,
      err,
    };
  },

  eventCreateBegin: () => {
    return {
      type: actions.BLOGS_CREATE_BEGIN,
    };
  },

  eventCreateSuccess: (data) => {
    return {
      type: actions.BLOGS_CREATE_SUCCESS,
      data,
    };
  },

  eventCreateErr: (err) => {
    return {
      type: actions.BLOGS_CREATE_ERR,
      err,
    };
  },

  startDeleteBegin: () => {
    return {
      type: actions.BLOGS_DELETE_BEGIN,
    };
  },

  startDeleteSuccess: (data) => {
    return {
      type: actions.BLOGS_DELETE_SUCCESS,
      data,
    };
  },

  startDeleteErr: (err) => {
    return {
      type: actions.BLOGS_DELETE_ERR,
      err,
    };
  },

  blogsReadBegin: () => {
    return {
      type: actions.BLOGS_READ_BEGIN,
    };
  },

  blogsReadSuccess: (data) => {
    return {
      type: actions.BLOGS_READ_SUCCESS,
      data,
    };
  },

  blogsReadErr: (err) => {
    return {
      type: actions.BLOGS_READ_ERR,
      err,
    };
  },

  singleBlogBegin: () => {
    return {
      type: actions.SINGLE_BLOG_BEGIN,
    };
  },

  singleBlogSuccess: (data) => {
    return {
      type: actions.SINGLE_BLOG_SUCCESS,
      data,
    };
  },

  singleBlogErr: (err) => {
    return {
      type: actions.SINGLE_BLOG_ERR,
      err,
    };
  },
};

export default actions;
