import { combineReducers } from 'redux';
import {AuthReducer, projectauthReducer, commandReducer, commandReducerDep} from './authentication/reducers';
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
  deps: commandReducerDep,

});

export default rootReducers;
