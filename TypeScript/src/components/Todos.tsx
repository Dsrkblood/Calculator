import Todo from "../models/todo";
import TodoItem from "./TodoItem";

export default function Todos(props: { items: Todo[] }) {
	return (
		<ul>
			{props.items.map(item => (
				<>
					<TodoItem key={item.id} text={item.text} />
					{/* <li key={item.id}>{item.text}</li> */}
				</>
			))}
		</ul>
	);
}
