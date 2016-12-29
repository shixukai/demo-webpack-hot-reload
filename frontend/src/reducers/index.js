import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import app from './app';
// import home from './home';
// import search from './search';
// import entrepreneurshipspace from './entrepreneurshipspace';

const rootReducer = combineReducers({
  routing,
  // app,
  // home,
  // search,
  // entrepreneurshipspace,
})

export default rootReducer
