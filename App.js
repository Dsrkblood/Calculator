class Form extends React.Component {
	state = {
		city: "London",
		text: "London is a rainy city.",
		isLoved: true,
		number: "0",
	};

	handleChange = e => {
		// console.log(e.target.name);
		if (e.target.type === "checkbox") {
			this.setState({
				[e.target.name]: e.target.checked,
			});
		} else {
			this.setState({
				[e.target.name]: e.target.value,
			});
		}
	};
	render() {
		console.log(this.state.city);
		console.log(this.state.text);
		console.log(this.state.isLoved);
		console.log(this.state.number);
		return (
			<>
				<label>
					Enter city
					<input
						name='city'
						value={this.state.city}
						onChange={this.handleChange}
						type='text'
					/>
				</label>
				<br />
				<label>
					Write something about this city:
					<textarea
						name='text'
						value={this.state.text}
						onChange={this.handleChange}></textarea>
				</label>
				<br />
				<label>
					Do you like this city?
					<input
						name='isLoved'
						type='checkbox'
						checked={this.state.isLoved}
						onChange={this.handleChange}
					/>
				</label>
				<br />
				<label>
					How many times have you been to this City?
					<select
						name='number'
						value={this.state.number}
						onChange={this.handleChange}>
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
