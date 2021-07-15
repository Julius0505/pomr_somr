import { combineReducers } from 'redux';
import login from './login.reducer';
import register from './register.reducer';
import user from './user.reducer';
import setting from './setting.reducer';

const authReducers = combineReducers({
	user,
	login,
	register,
	setting
});

export default authReducers;
