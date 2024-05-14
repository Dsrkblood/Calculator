import classes from "./TodoItem.module.css";
export default function TodoItem(props: { text: string }) {
	return <li className={classes.item}>{props.text}</li>;
}
