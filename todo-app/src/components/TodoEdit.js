import React, {useState, useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import _ from 'lodash';
import {editTodo, fetchTodo} from '../actions';
import TodoForm from './TodoForm';

const TodoEdit = (props) => {
	const {todoId} = useParams();
		
	useEffect(()=> {
		props.fetchTodo(todoId);
	}, [])

	const selectedTodo = useSelector(state => state.todos[todoId]);	
	const buttonLabel = "Update";

	const onSubmit = formValues => {
		console.log(formValues)
		props.editTodo(todoId, formValues);
	};

	return (
		<div>
			<h1>ToDo List</h1>
			{!selectedTodo ? (
				<div className="ui segment">
			  	<div className="ui active inverted dimmer">
			    	<div className="ui text loader">Loading...</div>
			  	</div>
			</div>
			) : (
				<TodoForm initialValues={{todo: selectedTodo.todo}} buttonLabel={buttonLabel} onSubmit={onSubmit}/>
			)}
		</div>	
	);
};

export default connect(null, {editTodo, fetchTodo})(TodoEdit);