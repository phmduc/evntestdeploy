import { combineReducers } from 'redux';
import AuthReducer from './authentication/reducers';
import { SingleBlogReducer, blogsReducer } from './blogs/reducers';

const rootReducers = combineReducers({
  auth: AuthReducer,
  blogs: blogsReducer,
  blog: SingleBlogReducer,
});

export default rootReducers;
