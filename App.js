class List extends React.Component {
	state = {
		number1: 0,
		number2: 0,
		number3: 0,
	};

	handleAdd = () => {
		this.setState({
			number1: this.state.number1 + 1,
		});
		// console.log(this.state.number1 + "  w metodzie");
	};

	handleAdd2 = () => {
		this.setState({
			number2: this.state.number2 + 1,
		});
		this.setState({
			number2: this.state.number2 + 1,
		});
		this.setState({
			number2: this.state.number2 + 1,
		});
	};

	handleAdd3 = () => {
		this.setState(prevState => ({
			number3: prevState.number3 + 1,
		}));
		this.setState(prevState => ({
			number3: prevState.number3 + 2,
		}));
		this.setState(prevState => ({
			number3: prevState.number3 + 3,
		}));
	};

	render() {
		// console.log(this.state.number1 + " w render");
		return (
			<div>
				<button onClick={this.handleAdd}>Podbij o 1</button>
				<h1>{this.state.number1}</h1>
				<button onClick={this.handleAdd2}>Podbij o 3</button>
				<h1>{this.state.number2}</h1>
				<button onClick={this.handleAdd3}>Podbij o 6</button>
				<h1>{this.state.number3}</h1>
			</div>
		);
	}
}

ReactDOM.render(<List />, document.getElementById("root"));
