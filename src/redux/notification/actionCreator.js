import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
import { toast } from 'react-toastify';

const {readNotificationBegin, readNotificationSuccess, readNotificationErr} = actions;

const readNotificationList = (id) => {
  return async (dispatch) => {
    try {
      dispatch(readNotificationBegin());
      const data = await DataService.post(`/wp-json/dbevn/v1/alerts/user-${id}`)
      dispatch(readNotificationSuccess(data.data));
    } catch (err) {
      dispatch(readNotificationErr(err));
    }
  };
};


export { readNotificationList};
