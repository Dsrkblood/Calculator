class List extends React.Component {
	state = {
		status: true,
	};

	componentDidMount() {
		console.log(`Aplikacja zamontowana ${this.state.status}`);
	}
	componentDidUpdate() {
		console.log(`Aplikacja aktualizowana ${this.state.status}`);
	}

	render() {
		console.log(`renderowanie głównej aplikacji`);
		return (
			<>
				<button
					onClick={() =>
						this.setState({
							status: !this.state.status,
						})
					}>
					Przełącz
				</button>
				<Child1 status={this.state.status} />
				{this.state.status && <Child2 />}
			</>
		);
	}
}

class Child1 extends React.Component {
	// componentDidMount() {
	// 	console.log(`Child1 zamontowany`);
	// }
	// componentDidUpdate() {
	// 	console.log(`Child1 aktualizowana `);
	// }
	
	render() {
		console.log(`renderowanie child1`);
		return <>{this.props.status ? "true" : "false"}</>;
	}
}

class Child2 extends React.Component {
	componentDidMount() {
		console.log(`Child2 zamontowany`);
	}
	componentDidUpdate() {
		console.log(`Child2 aktualizowana `);
	}
	componentWillUnmount(){
		console.log(`Child2 odmontowany`);
	}
	render() {
		console.log(`render CHild2`);
		return <div>Komponent Child2 zamontowany</div>;
	}
}

ReactDOM.render(<List />, document.getElementById("root"));
