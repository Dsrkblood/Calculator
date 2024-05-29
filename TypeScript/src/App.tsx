import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
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

	return (
		<div>
			<NewTodo onAddTodo={addTodoHandler} />
			<Todos items={todoList} onRemoveTodo={removeTodohanlder} />
		</div>
	);
}

export default App;
