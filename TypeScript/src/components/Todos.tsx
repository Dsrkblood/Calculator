import Todo from "../models/todo";

export default function Todos(props:{items: Todo[]}) {

	return (
		<ul>
			{props.items.map(item => (
				<>
				{console.log(item)}
				<li key={item.id}>{item.text}</li>
				</>
			))}
		</ul>
	);
}
