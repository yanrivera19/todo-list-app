import React from 'react';
import {connect, useSelector} from 'react-redux';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {Link} from 'react-router-dom';
import {addTodo} from '../actions';

const HomePage = props => {
	const isSignedIn = useSelector(state => state.auth.isSignedIn);
	const buttonLabel = "Add";

	const onSubmit = formValues => {
		props.addTodo(formValues)
	};

	return (
		<>
			<h1>ToDo List</h1>
			<TodoForm buttonLabel={buttonLabel} onSubmit={onSubmit}/>
			<TodoList />
		</>
	);
};

export default connect(null, {addTodo})(HomePage);