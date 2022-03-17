import React from "react";
import { useSelector } from "react-redux";
import { Form, Field } from "react-final-form";

const TodoForm = (props) => {
	const isSignedIn = useSelector((state) => state.auth.isSignedIn);

	const renderError = ({ error, submitFailed }) => {
		if (submitFailed && error) {
			return (
				<div className="ui mini red error message err-msg">
					<div
						className="header"
						style={{ fontSize: "15px", fontWeight: "bold" }}
					>
						{error}
					</div>
				</div>
			);
		}
	};

	const renderInput = ({ input, meta }) => {
		const className = `field ${
			meta.error && meta.submitFailed ? "error" : ""
		} todo-form`;
		let autofocus = false;
		let readOnly = false;
		let value;

		if (props.initialValues) {
			autofocus = true;
		}

		if (!isSignedIn) {
			readOnly = true;
			value = "";
		}

		return (
			<div className={className} style={{ paddingBottom: "50px" }}>
				<div className="ui fluid action icon input ">
					<input
						{...input}
						autoFocus={autofocus}
						className="todo-input"
						placeholder="Add a to-do..."
						autoComplete="off"
						style={{ fontSize: "18px" }}
						readOnly={readOnly}
						value={value}
					/>

					<button
						className="ui compact button green todo-input"
						style={{ fontSize: "18px" }}
					>
						<span className="form-btn">{props.buttonLabel}</span>
					</button>
				</div>
				{renderError(meta)}
			</div>
		);
	};

	const onSubmit = (formValues, form) => {
		if (isSignedIn) {
			props.onSubmit(formValues);
			form.reset();
		}
	};

	return (
		<Form
			initialValues={props.initialValues}
			onSubmit={onSubmit}
			validate={(formValues) => {
				const errors = {};

				if (!formValues.todo && isSignedIn) {
					errors.todo = "Add a valid to-do";
				}

				return errors;
			}}
			render={({ handleSubmit }) => (
				<form
					onSubmit={handleSubmit}
					spellCheck="false"
					className="ui form error"
				>
					<Field name="todo" component={renderInput} />
				</form>
			)}
		/>
	);
};

export default TodoForm;
