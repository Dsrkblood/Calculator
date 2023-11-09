class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messageIsActive: false,
		};
		this.handleMessageButton = this.handleMessageButton.bind(this);
	}

	handleMessageButton() {
		// debugger
		this.setState(prevState => ({
			messageIsActive: !prevState.messageIsActive,
		}));
	}

	render() {
		// console.log(this.state.messageIsActive);
		const text =
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt rerum voluptatem, eum odit facere eveniet. Exercitationem velit molestiae excepturi veritatis nemo est? Possimus adipisci ipsam assumenda, praesentium voluptate inventore.";
		return (
			<>
				<button onClick={this.handleMessageButton}>
					{this.state.messageIsActive ? "Hide" : "Show"}
				</button>
				{this.state.messageIsActive && <p>{text}</p>}
				{/* {this.state.messageIsActive ? <p>{text}</p>: null} */}
				{/* <p>{this.state.messageIsActive && text}</p> */}
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
