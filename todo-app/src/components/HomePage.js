import React from 'react';
import {connect, useSelector} from 'react-redux';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {Link} from 'react-router-dom';
import {addTodo} from '../actions';

const HomePage = props => {
	const isSignedIn = useSelector(state => state.auth.isSignedIn);
	console.log(isSignedIn)
	const buttonLabel = "Add";
	
	//onSubmit function to be passed to todoform
	const onSubmit = formValues => {
		props.addTodo(formValues)
	}

	//do logic here to display page only if user is signed in

	return (
		<>
			<h1>ToDo List</h1>
			<TodoForm buttonLabel={buttonLabel} onSubmit={onSubmit}/>
			<TodoList/>
		</>
	)
}

export default connect(null, {addTodo})(HomePage);