import { useRef } from "react";
import classes from "./NewTodo.module.css";

export default function NewTodo(props: { onAddTodo: (text: string) => void }) {
	const todoTextInput = useRef<HTMLInputElement>(null);

	function submitHandler(event: React.FormEvent) {
		event.preventDefault();

		const eneteredText = todoTextInput.current!.value;

		if (eneteredText?.trim().length === 0) {
			// throw Error
			return;
		}

		props.onAddTodo(eneteredText);
	}

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor='text'>Todo text</label>
			<input type='text' id='text' ref={todoTextInput} />
			<button>Add Todo</button>
		</form>
	);
}
