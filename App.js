class App extends React.Component {
	state = {
		active: true,
	};

	handleClick = () => {
		this.setState(prevState => ({
			active: !prevState.active,
		}));
	};

	render() {
		return (
			<div>
				<SwitchButton active={this.state.active} click={this.handleClick} />
				<br />
				{this.state.active === true && <Clock />}
			</div>
		);
	}
}

const SwitchButton = props => (
	<button onClick={props.click}>{props.active ? "Wyłącz" : "Włącz"}</button>
);

class Clock extends React.Component {
	interval = "";

	state = {
		time: this.getTime(),
	};

	getTime() {
		const currentTime = new Date();
		return {
			hours: currentTime.getHours(),
			minutes: currentTime.getMinutes(),
			seconds: currentTime.getSeconds(),
		};
	}
	setTime = () => {
		const time = this.getTime();
		this.setState({ time });
	};
	componentDidMount() {
		console.log("zegarek zamontowany");
		this.interval = setInterval(this.setTime, 1000);
	}

	componentWillUnmount() {
		console.log("zegarek usunięty");
		clearInterval(this.interval);
	}

	render() {
		this.getTime();
		const { hours, minutes, seconds } = this.state.time;
		return (
			<>
				{hours} : {minutes > 9 ? minutes : `0${minutes}`} :{" "}
				{seconds > 9 ? seconds : `0${seconds}`}
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
