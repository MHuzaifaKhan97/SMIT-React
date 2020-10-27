import { combineReducers } from 'redux';
import user_reducer from './user_reducer';
import app_reducer from './app_reducer';

export default combineReducers({
    user: user_reducer,
    app: app_reducer
})