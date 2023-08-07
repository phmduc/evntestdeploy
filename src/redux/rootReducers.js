import { combineReducers } from 'redux';
import {AuthReducer, projectauthReducer, commandReducer} from './authentication/reducers';
import { SingleBlogReducer, blogsReducer, categoryReducer } from './blogs/reducers';
import { projectsReducer } from './projects/reducers';

const rootReducers = combineReducers({
  auth: AuthReducer,
  blogs: blogsReducer,
  pjauth: projectauthReducer,
  blog: SingleBlogReducer,
  command: commandReducer,
  projects: projectsReducer,
  category: categoryReducer,

});

export default rootReducers;
