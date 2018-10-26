// import { persistCombineReducers } from 'redux-persist';
// import storage from 'redux-persist/es/storage';
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import FacebookAuthReducer from './FacebookAuthReducer';

export default combineReducers({
  auth: AuthReducer,
  facebookAuth: FacebookAuthReducer
});

/*
const config = {
  key: 'root',
  storage
};

export default persistCombineReducers(config, {
  auth: AuthReducer
});
*/
