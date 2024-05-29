import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

export default function Todos(props: {
	items: Todo[];
	onRemoveTodo: (id: string) => void;
}) {
	return (
		<ul className={classes.todos}>
			{props.items.map(item => (
				<>
					<TodoItem
						key={item.id}
						text={item.text}
						onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
					/>
				</>
			))}
		</ul>
	);
}
