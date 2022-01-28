import React from 'react';
import {connect} from 'react-redux';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {addTodo} from '../actions';

const HomePage = props => {
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