import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {todosReducer, completedTodoReducer} from './todosReducer';

export default combineReducers({
	auth: authReducer ,
	todos: todosReducer
});