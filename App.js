class Form extends React.Component {
	state = {
		city: "London",
		text: "London is a rainy city.",
		isLoved: true,
		number: "0",
	};

	handleCityChange = e => {
		this.setState({
			city: e.target.value,
		});
	};

	handleTextChange = e => {
		this.setState({
			text: e.target.value,
		});
	};

	handleIsLovedChange = e => {
		this.setState({
			isLoved: e.target.checked,
		});
	};

	handleVisitsNumberChange = e => {
		this.setState({
			number: e.target.value,
		});
	};
	render() {
		// console.log(this.state.city);
		// console.log(this.state.text);
		// console.log(this.state.isLoved);
		console.log(this.state.number);
		return (
			<>
				<label>
					Enter city
					<input
						value={this.state.city}
						onChange={this.handleCityChange}
						type='text'
					/>
				</label>
				<br />
				<label>
					Write something about this city:
					<textarea
						value={this.state.text}
						onChange={this.handleTextChange}></textarea>
				</label>
				<br />
				<label>
					Do you like this city?
					<input
						type='checkbox'
						checked={this.state.isLoved}
						onChange={this.handleIsLovedChange}
					/>
				</label>
				<br />
				<label>
					How many times have you been to this City?
					<select
						value={this.state.number}
						onChange={this.handleVisitsNumberChange}>
						<option value='0'>0</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='more'>More</option>
					</select>
				</label>
			</>
		);
	}
}

ReactDOM.render(<Form />, document.getElementById("root"));
