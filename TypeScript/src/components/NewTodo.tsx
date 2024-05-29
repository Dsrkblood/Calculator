import { useContext } from "react";
import { useRef } from "react";

import { TodosContext } from "../store/todos-context";

import classes from "./NewTodo.module.css";

export default function NewTodo() {
	const { addTodo } = useContext(TodosContext);
	const todoTextInput = useRef<HTMLInputElement>(null);

	function submitHandler(event: React.FormEvent) {
		event.preventDefault();

		const eneteredText = todoTextInput.current!.value;

		if (eneteredText?.trim().length === 0) {
			// throw Error
			return;
		}

		addTodo(eneteredText);
	}

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor='text'>Todo text</label>
			<input type='text' id='text' ref={todoTextInput} />
			<button>Add Todo</button>
		</form>
	);
}
