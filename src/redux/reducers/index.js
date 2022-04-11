import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import merchantsReducer from './merchantsReducer';

export default combineReducers({
    auth: authReducer,
    merchants: merchantsReducer
});