const Cash = props => (
	<div>
		{props.title}
		{props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}
	</div>
);

class ExchangeCounter extends React.Component {
	state = {
		amount: "",
	};

	currencies = [
		{
			id: 1,
			name: "dollar",
			ratio: 4.02,
			title: "Wartość w dolarach: ",
		},
		{
			id: 2,
			name: "euro",
			ratio: 4.38,
			title: "Wartość w euro: ",
		},
		{
			id: 3,
			name: "pound",
			ratio: 5.02,
			title: "Wartość w funtach: ",
		},
	];
	handleChange = e => {
		this.setState({
			amount: e.target.value,
		});
	};

	render() {
		const { amount } = this.state;
		const calculators = this.currencies.map(currency => (
			<Cash
				key={currency.id}
				ratio={currency.ratio}
				title={currency.title}
				cash={amount}
			/>
		));
		return (
			<div className='app'>
				<label>
					<input
						type='number'
						value={this.state.amount}
						onChange={this.handleChange}
					/>
				</label>
				{calculators}
			</div>
		);
	}
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
