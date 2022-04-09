import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { fetchTodos, deleteTodo, checkTodo } from "../actions";
import { Link } from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";

const TodoList = (props) => {
	const todos = useSelector((state) => state.todos);
	const isSignedIn = useSelector((state) => state.auth.isSignedIn);
	const currentUserId = useSelector((state) => state.auth.userId);
	console.log(todos);

	useEffect(() => {
		if (isSignedIn === false) {
			return null;
		} else {
			props.fetchTodos();
		}
	}, [props, isSignedIn]);

	const checkTodoOnClick = (todo, todoId) => {
		if (todo.completed === false) {
			props.checkTodo(todoId, { completed: true });
		} else {
			props.checkTodo(todoId, { completed: false });
		}
	};

	const renderEditDeleteBtns = (todo) => {
		if (todo.userId === currentUserId) {
			return (
				<div className="ui right floated">
					<Link to={`/edit/${todo.id}`}>
						<i
							className="edit outline yellow icon large icon-btn"
							style={{ marginTop: "6px" }}
						></i>
					</Link>
					<i
						onClick={() => props.deleteTodo(todo.id)}
						className="trash alternate outline red icon large icon-btn"
						style={{ marginTop: "6px", cursor: "pointer" }}
					></i>
				</div>
			);
		}
	};

	const renderCheckBtn = (todo) => {
		if (todo.userId === currentUserId) {
			return (
				<i
					onClick={() => checkTodoOnClick(todo, todo.id)}
					className="ui left floated check circle outline blue icon large icon-btn"
					style={{
						marginTop: "6px",
						marginRight: "5px",
						cursor: "pointer",
					}}
				></i>
			);
		} else {
			return (
				<i
					disabled
					className="ui left floated check circle outline icon large icon-btn"
					style={{ marginTop: "6px", marginRight: "5px" }}
				></i>
			);
		}
	};

	const renderList = Object.values(todos).map((todo) => {
		return (			
			<motion.div
	            key={todo.id}
	            initial={{ x: 300, opacity: 0 }}
			    animate={{ x: 0, opacity: 1 }}
			    exit={{ x: -300, opacity: 0 }}
	            layout
	            className="item todo-item"
				style={{ backgroundColor: "white", marginBottom: "10px" }}
            >
					{renderEditDeleteBtns(todo)}
					<div className=" content">
						{renderCheckBtn(todo)}
						<p
							className={`${
								todo.completed === true ? "crossed-line" : ""
							} todo-txt floated`}
							style={{ fontSize: "23px" }}
						>
							{todo.todo}
						</p>
					</div>
			</motion.div>			
		);
	});

	return (
		<>
			{isSignedIn ? (
				<div className="animated ui celled list todo-list"
				>
					<AnimatePresence>
						{renderList}
					</AnimatePresence>
				</div>
			) : null}		
		</>
	);
};

export default connect(null, { fetchTodos, deleteTodo, checkTodo })(TodoList);
