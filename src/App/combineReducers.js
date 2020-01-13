import { combineReducers } from 'redux';
import { reducer as ChatReducer } from './modules/Chat';

export default combineReducers({
  chat: ChatReducer,
});