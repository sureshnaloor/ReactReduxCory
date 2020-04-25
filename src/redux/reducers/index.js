import { combineReducers } from 'redux';

import courses from './courseReducer'; //since default exported we can rename to courses from courseReducer.
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
});

export default rootReducer;
