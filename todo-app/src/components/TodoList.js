import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux'
import {fetchTodos, deleteTodo, checkTodo} from '../actions';
import {Link} from 'react-router-dom';

const TodoList = (props) => {
	const todos = useSelector(state => state.todos);
	const isSignedIn = useSelector(state => state.auth.isSignedIn);
	const currentUserId = useSelector(state => state.auth.userId);

	useEffect(() => {
		if (isSignedIn === false) {
			return null;
		} else {
			props.fetchTodos();
		}
	},[props, isSignedIn])

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
				<div className="ui right floated">		    
			    	<Link to={`/edit/${todo.id}`}><i className="edit outline yellow icon large icon-btn" style={{marginTop: '6px'}}></i></Link>
			    	<i onClick={() => props.deleteTodo(todo.id)} className="trash alternate outline red icon large icon-btn" style={{marginTop: '6px'}}></i>	    	
		    	</div>
			);
		}
	};

	const renderCheckBtn = todo => {
		if (todo.userId === currentUserId) {
			return (				
				<i onClick={() => checkTodoOnClick(todo, todo.id)} className="ui left floated check circle outline blue icon large icon-btn" style={{marginTop: '6px', marginRight: '5px'}}></i>
			);
		} else {
			return (
				<i disabled className="ui left floated check circle outline icon large" style={{marginTop: '4px', marginRight: '5px'}} ></i>
			);
		}
	};	

	const renderList = Object.values(todos).map(todo => {
		return (			
			<div className="item todo-item" key={todo.id} style={{ backgroundColor:'white'}}>
				{renderEditDeleteBtns(todo)}
		    	<div className=" content">
					{renderCheckBtn(todo)}
					<p className={`${todo.completed === true ? "crossed-line" : ""} todo-txt floated`}  style={{fontSize: '23px'}}>{todo.todo}</p>
			   </div>
			</div>			
		);
	});

	return (
		<div className={`${isSignedIn === true ? "animated" : ""} ui celled list todo-list`}>
			{renderList}
		</div>
	);
};

export default connect(null, {fetchTodos, deleteTodo, checkTodo})(TodoList);