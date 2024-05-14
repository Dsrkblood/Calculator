import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css'

export default function Todos(props: { items: Todo[] }) {
	return (
		<ul className={classes.todos}>
			{props.items.map(item => (
				<>
					<TodoItem key={item.id} text={item.text} />
					{/* <li key={item.id}>{item.text}</li> */}
				</>
			))}
		</ul>
	);
}
