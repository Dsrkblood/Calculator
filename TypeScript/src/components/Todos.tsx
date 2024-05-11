export default function Todos(props: { items: string[] }) {
	return (
		<ul>
			{props.items.map(item => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
}
