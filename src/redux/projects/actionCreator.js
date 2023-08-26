import axios from 'axios';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
import { toast } from 'react-toastify';



const {projectsReadBegin, projectsReadSuccess, projectsReadErr, projectsInvestBegin, projectsInvestErr, projectsInvestSuccess } = actions;

const projectsGetData = () => {
  return async (dispatch) => {
    try {
      dispatch(projectsReadBegin());
      const initialState = await DataService.get('/wp-json/dbevn/v1/products');
      dispatch(projectsReadSuccess(initialState.data));
    } catch (err) {
      dispatch(projectsReadErr(err));
    }
  };
};

const projectsInvest = (data, callback = ()=>{}) => {
  return async (dispatch) => {
    try {
      dispatch(projectsInvestBegin());
      const initialState = await DataService.post('/wp-json/dbevn/v1/orders/create', data);
      dispatch(projectsInvestSuccess(initialState.data));
      toast.success(initialState.data);
      callback()
    } catch (err) {
      dispatch(projectsInvestErr(err));
    }
  };
};


export { projectsGetData, projectsInvest };
