const Person = props => {
	return (
		<li>
			<span>{props.name}</span>
			<button onClick={props.click}>Usuń</button>
		</li>
	);
};

class List extends React.Component {
	state = {
		people: [
			{
				id: 1,
				name: "Jan K.",
			},
			{
				id: 2,
				name: "Piotr K.",
			},
			{
				id: 3,
				name: "Maria W.",
			},
			{
				id: 4,
				name: "John S.",
			},
		],
	};

	handleDelete = id => {
		const people = [...this.state.people];
		const index = people.findIndex(person => person.id === id);
		people.splice(index, 1);
		this.setState({
			people,
		});
	};

	render() {
		const people = this.state.people.map(person => (
			<Person
				key={person.id}
				name={person.name}
				click={() => this.handleDelete(person.id)}
			/>
		));
		return <ul>{people}</ul>;
	}
}

ReactDOM.render(<List />, document.getElementById("root"));
