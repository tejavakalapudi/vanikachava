import { combineReducers } from 'redux';
import sheetsReducer from './sheets';
import analyticsReducer from './analytics';
import appStateReducer from './appState';

export default combineReducers({
  sheets: sheetsReducer,
  analytics: analyticsReducer,
  appState: appStateReducer
});
