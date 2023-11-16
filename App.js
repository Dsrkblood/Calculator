class Los extends React.Component {
	state = {
		rand: null,
		divination: ["pierwsza wróżba", "druga wróżba", "trzecia wróżba"],
		value: "",
	};

	handleRand = () => {
		this.setState({
			rand: Math.floor(Math.random() * this.state.divination.length),
		});
	};

	randomMessage() {
		return <h1>{this.state.divination[this.state.rand]}</h1>;
	}

	handleDivination = e => {
		this.setState({
			value: e.target.value,
		});
	};

	handleAddDivination = () => {
		// let newArray = this.state.divination.map(el => el);
		// newArray.push(value);
		// this.setState({
		// 	divination: newArray,
		// 	value: "",
		// });
		if (this.state.value === "") return alert("wpisz coś!");
		else {
			const divination = [...this.state.divination];
			divination.push(this.state.value);
			this.setState({
				divination,
				value: "",
			});
			alert(`Wróżba dodana. Aktualne wróżby: ${divination}`);
		}
	};

	render() {
		return (
			<>
				<button onClick={this.handleRand}>Zobacz wróżbę</button>
				<br />
				<input
					type='text'
					value={this.state.value}
					onChange={this.handleDivination}
				/>
				<button onClick={this.handleAddDivination}>Dodaj wróżbę</button>
				{this.randomMessage()}
			</>
		);
	}
}

ReactDOM.render(<Los />, document.getElementById("root"));
