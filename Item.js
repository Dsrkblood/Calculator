const Item = props => {
	return (
		<li onClick={() => props.changeStatus(props.id)}
			className={props.active ? "enabled" : "disabled"}>
			{props.name}
		</li>
	);
};
// style={props.active ? { fontWeight: "bold" } : { color: "gray" }}
