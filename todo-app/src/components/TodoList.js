import React, {useEffect, useState} from 'react';
import {connect, useSelector} from 'react-redux'
import {fetchTodos, deleteTodo, checkTodo} from '../actions';
import {Link} from 'react-router-dom';

const TodoList = (props) => {
	// const [check, setCheck] = useState(false)
	const todos = useSelector(state => state.todos);
	const isSignedIn = useSelector(state => state.auth.isSignedIn);
	const currentUserId = useSelector(state => state.auth.userId);
	console.log(todos)


	useEffect(() => {
		if (isSignedIn === false) {
			return null;
		} else {
			props.fetchTodos();
		}
	},[])
// 

	const checkTodoOnClick = (todo, todoId) => {
		console.log(todo, todoId)
		if (todo.completed === false) {
			props.checkTodo(todoId, {completed: true})
		} else {
			props.checkTodo(todoId, {completed: false})
		}		
	};

	const renderEditDeleteBtns = todo => {
		if (todo.userId === currentUserId) {
			return (
				<div className="ui right floated basic buttons btns ">		    
			    	<Link to={`/edit/${todo.id}`} className="ui compact icon button"><i className="edit outline icon"></i></Link>
			    	<button onClick={() => props.deleteTodo(todo.id)} className="ui compact icon button del-btn"><i className="trash alternate outline icon"></i></button>	    	
		    	</div>
			);
		}
	};

	const renderCheckBtn = todo => {
		if (todo.userId === currentUserId) {
			return (
				<button onClick={() => checkTodoOnClick(todo, todo.id)} className="ui compact icon basic button" style={{marginTop: '1px'}}>
					<i className="check circle outline icon"></i>
				</button>
			);
		} else {
			return (
				<button className="ui compact icon basic button" disabled style={{marginTop: '1px'}}>
					<i className="check circle outline icon"></i>
				</button>
			);
		}
	};	

	const renderList = Object.values(todos).map(todo => {
		return (			
			<div className="item todo-list" key={todo.id} style={{ backgroundColor:'white', marginBottom: '12px'}}>
				{renderEditDeleteBtns(todo)}
		    	<div className=" content">
					{renderCheckBtn(todo)}
					<p className={`${todo.completed === true ? "crossed-line" : ""}`}  style={{fontSize: '20px', paddingLeft: '5px', marginTop: '1px' }}>{todo.todo}</p>
			   </div>
			</div>			
		);
	});

	return (
		<div className="ui celled list">
			{renderList}
		</div>
	);
};

export default connect(null, {fetchTodos, deleteTodo, checkTodo})(TodoList);