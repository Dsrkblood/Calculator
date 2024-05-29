import classes from "./TodoItem.module.css";
export default function TodoItem(props: {
	text: string;
	onRemoveTodo: () => void;
}) {
	return (
		<li className={classes.item} onClick={props.onRemoveTodo}>
			{props.text}
		</li>
	);
}
