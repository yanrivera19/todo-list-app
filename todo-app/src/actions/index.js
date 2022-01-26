import todos from '../apis/todos';
import history from '../history';
import {
	SIGN_IN, 
	SIGN_OUT,
	ADD_TODO,
	CHECK_TODO,
	FETCH_TODO,
	FETCH_TODOS,
	EDIT_TODO,
	DELETE_TODO} from './types'

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

export const checkTodo = (id, checkedTodo) => {
	return {
		type: CHECK_TODO,
		payload: id, checkedTodo
	};
};

export const addTodo = todo => async (dispatch, getState) => {
	const {userId} = getState().auth
	const {completed} = getState().completed
	const response = await todos.post('/todos', {...todo, userId, completed});

	dispatch({type: ADD_TODO, payload: response.data});
};

export const fetchTodo = id => async dispatch => {
	const response = await todos.get(`/todos/${id}`);

	dispatch({type: FETCH_TODO, payload: response.data});
};

export const fetchTodos = () => async dispatch => {
	const response = await todos.get('/todos');

	dispatch({type: FETCH_TODOS, payload: response.data});
};

export const editTodo = (id, todo) => async dispatch => {
	const response = await todos.patch(`/todos/${id}`, todo);

	dispatch({type: EDIT_TODO, payload: response.data});
	history.push('/');
};

export const deleteTodo = id => async dispatch => {
	//no need for a response when deleting
	await todos.delete(`/todos/${id}`);

	dispatch({type: DELETE_TODO, payload: id});
};