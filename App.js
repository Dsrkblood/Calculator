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

// class Counter extends React.Component {
// 	state = {
// 		count: 0,
// 		result: this.props.result,
// 	};

// 	handleMathClick = (type = "reset", number = 1) => {
// 		// debugger;
// 		this.setState(prevState => ({
// 			count: prevState.count + 1,
// 		}));

// 		if (type == "subtraction") {
// 			this.setState(prevState => ({
// 				// count: prevState.count + 1,
// 				result: prevState.result - number,
// 			}));
// 		} else if (type === "addition") {
// 			this.setState(prevState => ({
// 				// count: prevState.count + 1,
// 				result: prevState.result + number,
// 			}));
// 		} else if (type === "reset") {
// 			this.setState(prevState => ({
// 				// count: prevState.count + 1,
// 				result: 0,
// 			}));
// 		}
// 	};

// 	render() {
// 		return (
// 			<>
// 				<MathButton
// 					name='-10'
// 					number='10'
// 					type='subtraction'
// 					click={this.handleMathClick}
// 				/>
// 				<MathButton
// 					name='-1'
// 					number='1'
// 					type='subtraction'
// 					click={this.handleMathClick}
// 				/>
// 				<MathButton name='reset' type='reset' click={this.handleMathClick} />
// 				<MathButton
// 					name='+1'
// 					number='1'
// 					type='addition'
// 					click={this.handleMathClick}
// 				/>
// 				<MathButton
// 					name='+10'
// 					number='10'
// 					type='addition'
// 					click={this.handleMathClick}
// 				/>
// 				<ResultPanel count={this.state.count} result={this.state.result} />
// 			</>
// 		);
// 	}
// }

// const MathButton = props => {
// 	const number = parseInt(props.number);
// 	return (
// 		<button onClick={() => props.click(props.type, number)}>
// 			{props.name}
// 		</button>
// 	);
// };

// const ResultPanel = props => {
// 	return (
// 		<>
// 			<h1>
// 				Liczba kliknięć: {props.count}{" "}
// 				{props.count > 10 ? <span>Go! go! go!</span> : null}
// 			</h1>
// 			<h1>Wynik: {props.result}</h1>
// 		</>
// 	);
// };

// ReactDOM.render(<Counter result={0} />, document.getElementById("root"));

const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
const NegativeMessage = () => (
	<p>Nie możesz obejrzeć tego filmu jeśli nie masz ukończonych 16 lat</p>
);

class CheckboxAgeConfirmation extends React.Component {
	state = {
		isConfirmed: false,
	};

	handleCheckboxChange = () => {
		this.setState({
			isConfirmed: !this.state.isConfirmed,
		});
	};
	displayMessage = () =>{
		if(this.state.isConfirmed){
			return <PositiveMessage/>
		}else{
			return <NegativeMessage/>
		}
	}

	render() {
		return (
			<>
				<h1>Kup bilet na horror roku!</h1>
				<input
					type='checkbox'
					id='age'
					onChange={this.handleCheckboxChange}
					checked={this.state.isConfirmed}
				/>
				<label htmlFor='age'>Mam co najmniej 16 lat</label>
				{/* {this.state.isConfirmed ? <PositiveMessage /> : <NegativeMessage />} */}
				{this.displayMessage()}
			</>
		);
	}
}

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById("root"));
