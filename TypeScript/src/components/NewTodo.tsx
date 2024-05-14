import { useRef } from "react";

export default function NewTodo() {
	const todoTextInput = useRef<HTMLInputElement>(null);

	function submitHandler(event: React.FormEvent) {
		event.preventDefault();

        const eneteredText = todoTextInput.current?.value

        if(eneteredText?.trim().length === 0){
            // throw Error
            return;
        }

        
	}

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor='text'>Todo text</label>
			<input type='text' id='text' ref={todoTextInput} />
			<button>Add Todo</button>
		</form>
	);
}
