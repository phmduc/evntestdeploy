import axios from 'axios';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/wp-json/wp/v2/posts',
};


const fetchData = async () => {
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


fetchData();

const {starUpdateBegin, starUpdateErr, starUpdateSuccess, blogsReadBegin, blogsReadSuccess, blogsReadErr, singleBlogBegin, singleBlogErr, singleBlogSuccess ,eventCreateBegin ,eventCreateErr ,eventCreateSuccess, startDeleteBegin, startDeleteSuccess, startDeleteErr } = actions;

const blogsGetData = () => {
  return async (dispatch) => {
    try {
      dispatch(blogsReadBegin());
      const initialState = await fetchData();
      dispatch(blogsReadSuccess(initialState));
    } catch (err) {
      dispatch(blogsReadErr(err));
    }
  };
};

const filterSinglePage = (paramsId) => {
  return async (dispatch) => {
    try {
      dispatch(singleBlogBegin());
      const initialState = await fetchData();
      const data = initialState.filter((blog) => {
        return blog.id === parseInt(paramsId, 10);
      });
      dispatch(singleBlogSuccess(data));
    } catch (err) {
      dispatch(singleBlogErr(err));
    }
  };
};

const blogsCreateData = (values, callback) => {
  return async (dispatch) => {
    try {
      dispatch(eventCreateBegin());
      const initialState = await DataService.post('/wp-json/wp/v2/posts', values);
      dispatch(eventCreateSuccess(initialState));
      callback()
    } catch (err) {
      dispatch(eventCreateErr(err));
    }
  };
};

const blogsDeleteData = (id, callback) => {
  return async (dispatch) => {
    try {
      dispatch(startDeleteBegin());
      const initialState = await DataService.delete(`/wp-json/wp/v2/posts/${id}`);
      dispatch(startDeleteSuccess(initialState));
      callback()
    } catch (err) {
      dispatch(startDeleteErr(err));
    }
  };
};

const blogsUpdateData = (id, values, callback) => {
  console.log(values)
  return async (dispatch) => {
    try {
      dispatch(starUpdateBegin());
      const initialState = await DataService.put(`/wp-json/wp/v2/posts/${id}`,values);
      dispatch(starUpdateSuccess(initialState));
    } catch (err) {
      dispatch(starUpdateErr(err));
    }
  };
};

export { blogsGetData, filterSinglePage, blogsCreateData, blogsDeleteData, blogsUpdateData };
