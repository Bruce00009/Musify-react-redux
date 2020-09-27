import {combineReducers} from 'redux';
import app from './app';
import home from './home';
import search from './search';

export default combineReducers({
  app,
  home,
  search
});