import { createContext, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {},
});

export default function TodosContextProvider(props: { children: any }) {
	const [todoList, setTodoList] = useState<Todo[]>([]);

	function addTodoHandler(todoText: string) {
		const newTodo = new Todo(todoText);
		setTodoList(prevTodoList => {
			return prevTodoList.concat(newTodo);
		});
	}

	function removeTodohanlder(todoId: string) {
		setTodoList(prevTodos => {
			return prevTodos.filter(todo => todo.id !== todoId);
		});
	}

	const ctxValue: TodosContextObj = {
		items: todoList,
		addTodo: addTodoHandler,
		removeTodo: removeTodohanlder,
	};
	return (
		<TodosContext.Provider value={ctxValue}>
			{props.children}
		</TodosContext.Provider>
	);
}
