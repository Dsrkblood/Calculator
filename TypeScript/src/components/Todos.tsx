import { useContext } from "react";
import TodoItem from "./TodoItem";

import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";

export default function Todos() {
	const { items, removeTodo } = useContext(TodosContext);
	return (
		<ul className={classes.todos}>
			{items.map(item => (
				<>
					<TodoItem
						key={item.id}
						text={item.text}
						onRemoveTodo={removeTodo.bind(null, item.id)}
					/>
				</>
			))}
		</ul>
	);
}
