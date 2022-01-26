import React, {useState, useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import _ from 'lodash';
import {editTodo, fetchTodo} from '../actions';
import TodoForm from './TodoForm';

const TodoEdit = (props) => {
	const {todoId} = useParams();
		
	
	//useParams to get id of selected todo by clicking the edit button on the homepage
	useEffect(()=> {
		props.fetchTodo(todoId);
	}, [])

	const selectedTodo = useSelector(state => state.todos[todoId]);	

	const buttonLabel = "Update";
	console.log(selectedTodo)
// 	console.log(todo[todoId].todo)
	// const value = todo[todoId].todo;
	const onSubmit = formValues => {
		console.log(formValues)
		props.editTodo(todoId, formValues);
		//navigate to home page
		//save todos to our reducers
	}


	return (
		<div>
			{!selectedTodo ? (
				<div className="ui segment">
			  	<div className="ui active inverted dimmer">
			    	<div className="ui text loader">Loading</div>
			  	</div>
			  	<p></p>
			</div>
			) : (
				<TodoForm initialValues={{todo: selectedTodo.todo}} buttonLabel={buttonLabel} onSubmit={onSubmit}/>
			)}
		</div>	
		
		// <form onSubmit={onSubmit} className="ui form">
  // 			<div className="field">
		// 	    <div className="ui action input">
		// 		  <input type="text" autoComplete="off" name="todo" value={todo} onChange={e => setTodo(e.target.value)} placeholder="Add ToDo..." required/>
		// 		  <button onClick={onSubmit} className="ui button primary">Add</button>
		// 		</div>
		// 	</div>			
		// </form>
	);
}

export default connect(null, {editTodo, fetchTodo})(TodoEdit);