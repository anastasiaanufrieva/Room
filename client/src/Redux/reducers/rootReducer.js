import { combineReducers } from 'redux';
import deviceReducer from './deviceReducer';
import roomReducer from './roomReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  rooms: roomReducer,
  devices: deviceReducer,
  user: userReducer,
});

export default rootReducer;
