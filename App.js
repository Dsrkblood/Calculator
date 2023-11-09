// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			messageIsActive: false,
// 		};
// 		this.handleMessageButton = this.handleMessageButton.bind(this);
// 	}

// 	handleMessageButton() {
// 		// debugger
// 		this.setState(prevState => ({
// 			messageIsActive: !prevState.messageIsActive,
// 		}));
// 	}

// 	render() {
// 		// console.log(this.state.messageIsActive);
// 		const text =
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt rerum voluptatem, eum odit facere eveniet. Exercitationem velit molestiae excepturi veritatis nemo est? Possimus adipisci ipsam assumenda, praesentium voluptate inventore.";
// 		return (
// 			<>
// 				<button onClick={this.handleMessageButton}>
// 					{this.state.messageIsActive ? "Hide" : "Show"}
// 				</button>
// 				{this.state.messageIsActive && <p>{text}</p>}
// 				{/* {this.state.messageIsActive ? <p>{text}</p>: null} */}
// 				{/* <p>{this.state.messageIsActive && text}</p> */}
// 			</>
// 		);
// 	}
// }

// ReactDOM.render(<App />, document.getElementById("root"));

class Counter extends React.Component {
	state = {
		count: 0,
		result: this.props.result,
	};

	handleMathClick(type = "reset", number = 1) {
		// debugger;
		this.setState(prevState => ({
			count: prevState.count + 1,
		}));

		if (type == "substraction") {
			this.setState(prevState => ({
				// count: prevState.count + 1,
				result: prevState.result - number,
			}));
		} else if (type === "addiction") {
			this.setState(prevState => ({
				// count: prevState.count + 1,
				result: prevState.result + number,
			}));
		} else if (type === "reset") {
			this.setState(prevState => ({
				// count: prevState.count + 1,
				result: 0,
			}));
		}
	}

	render() {
		return (
			<>
				<button onClick={() => this.handleMathClick("addiction")}>+1</button>
				<button onClick={() => this.handleMathClick("addiction", 10)}>
					+10
				</button>
				<button onClick={() => this.handleMathClick()}>Reset</button>
				<button onClick={() => this.handleMathClick("substraction", 10)}>
					-10
				</button>
				<button onClick={() => this.handleMathClick("substraction")}>-1</button>
				<h1>Liczba kliknięć: {this.state.count}</h1>
				<h1>Wynik: {this.state.result}</h1>
			</>
		);
	}
}

ReactDOM.render(<Counter result={0} />, document.getElementById("root"));
