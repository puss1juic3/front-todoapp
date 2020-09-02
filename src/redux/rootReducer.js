import { combineReducers } from 'redux';
import { register } from './reducers/register';

export const rootReducer = combineReducers({
  register,
});
