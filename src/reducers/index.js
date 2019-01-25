import { combineReducers } from 'redux';

import playerReducers from './playerReducers';

export default combineReducers({
  player360: playerReducers
});