import { combineReducers } from 'redux';
import {AuthReducer, projectauthReducer} from './authentication/reducers';
import { SingleBlogReducer, blogsReducer } from './blogs/reducers';
import { projectsReducer } from './projects/reducers';

const rootReducers = combineReducers({
  auth: AuthReducer,
  blogs: blogsReducer,
  pjauth: projectauthReducer,
  blog: SingleBlogReducer,
  projects: projectsReducer,
});

export default rootReducers;
