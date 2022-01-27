import React, {useState} from 'react';
import {useSelector} from 'react-redux';
// import {addTodo} from '../actions';
import { Form, Field } from "react-final-form";

const TodoForm = (props) => {
	const isSignedIn = useSelector(state => state.auth.isSignedIn);

  	const renderError = ({ error, submitFailed }) => {

    	if (submitFailed && error) {
	      	return (
	        	<div className="ui mini red error message">
	          		<div className="header">{error}</div>
	        	</div>
	      	);
    	}
  	};
 
  	const renderInput = ({ input, meta }) => {
    	const className = `field ${meta.error && meta.submitFailed ? "error" : ""}`;

		return (			
  			<div className={className} style={{paddingBottom: '50px'}}>
      			<div className="ui action input">
        			<input {...input} className="todo-input" placeholder="Add ToDo..." autoComplete="off" />
        			<button className="ui button primary todo-input">{props.buttonLabel}</button>
        		</div>
        		{renderError(meta)}	
  			</div>
		);
  	};
 
  	const onSubmit = (formValues, form) => {
    	props.onSubmit(formValues);
    	form.reset();
  	};

  	console.log(props.initialValues)
 
  	return (
    	<Form
	    	initialValues={props.initialValues}
	    	onSubmit={onSubmit}
	    	validate={formValues => {
        		const errors = {};
 
        		if (!formValues.todo) {
          			errors.todo = "Enter a ToDo";
        		}

        		return errors;
      		}}
      		render={({ handleSubmit }) => (
        		<form onSubmit={handleSubmit} className="ui form error">
        			{!isSignedIn ? null : (      			
          				<Field name="todo" component={renderInput} /> 
          			)}
        		</form>
      		)}
    	/>
  	);
};
 
export default TodoForm;

// 	const [todo, setTodo] = useState('');
// 	// const todos = useSelector(state => state.todos);
// 
// 	const onSubmit = event => {
// 		event.preventDefault();
// 
// 		props.addTodo(todo);
// 		setTodo('');
// 		//save todos to our reducers
// 	}
// 
// 
// 	return (
// 		<form onSubmit={onSubmit} className="ui form">
//   			<div className="field">
// 			    <div className="ui action input">
// 				  <input type="text" autoComplete="off" name="todo" onChange={e => setTodo(e.target.value)} placeholder="Add ToDo..." required/>
// 				  <button onClick={onSubmit} className="ui button primary">Add</button>
// 				</div>
// 			</div>			
// 		</form>
// 	);
// };

// export default connect(null, {addTodo})(TodoForm);