import { combineReducers } from 'redux';
import sheetsReducer from './sheets';

export default combineReducers({
    sheets: sheetsReducer
});