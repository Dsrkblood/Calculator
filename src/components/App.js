import React, { Component } from "react";
import "./App.css";
import SwitchButton from "./SwitchButton";

class App extends Component {
	state = {
		time: 0,
		active: false,
	};

	handleClick = () => {
		if (this.state.active) {
			clearInterval(this.idInterval);
		} else {
			this.idInterval = setInterval(() => this.addSecond(), 1000);
		}

		this.setState({
			active: !this.state.active,
		});
	};

	addSecond = () => {
		this.setState(prevState => ({
			time: prevState.time + 1,
		}));
	};

	handleReset = () => {
		clearInterval(this.idInterval);
		this.setState({
			active: false,
			time: 0,
		});
	};

	render() {
		return (
			<div>
				<SwitchButton
					click={this.handleClick}
					reset={this.handleReset}
					active={this.state.active}
				/>
				<p>{this.state.time}s</p>
			</div>
		);
	}
}

export default App;


