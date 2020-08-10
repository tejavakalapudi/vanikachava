import { combineReducers } from 'redux';
import sheetsReducer from './sheets';
import analyticsReducer from './analytics';

export default combineReducers({
  sheets: sheetsReducer,
  analytics: analyticsReducer,
});
