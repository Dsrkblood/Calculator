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

// const ValidationMessage = props => {
// 	const { text } = props;
// 	return <p>{text}</p>;
// };

// const OrderForm = props => {
// 	const {submit,change,checked} = props
// 	return (
// 		<form onSubmit={submit}>
// 			<input
// 				type='checkbox'
// 				id='age'
// 				onChange={change}
// 				checked={checked}
// 			/>
// 			<label htmlFor='age'>Mam co najmniej 16 lat</label>
// 			<br />
// 			<button type='submit'>Kup bilet</button>
// 		</form>
// 	);
// };

// class TicketShop extends React.Component {
// 	state = {
// 		isConfirmed: false,
// 		isFormSubmitted: false,
// 	};

// 	handleCheckboxChange = () => {
// 		this.setState({
// 			isConfirmed: !this.state.isConfirmed,
// 			isFormSubmitted: false,
// 		});
// 	};

// 	handleFormSubmit = e => {
// 		e.preventDefault();
// 		if (!this.state.isFormSubmitted) {
// 			this.setState({
// 				isFormSubmitted: true,
// 			});
// 		}
// 	};

// 	displayMessage = () => {
// 		if (this.state.isFormSubmitted) {
// 			if (this.state.isConfirmed) {
// 				return <ValidationMessage text='Możesz obejrzeć film. Zapraszamy!' />;
// 			} else {
// 				return (
// 					<ValidationMessage text='Nie możesz obejrzeć tego filmu jeśli nie masz ukończonych 16 lat' />
// 				);
// 			}
// 		} else {
// 			return null;
// 		}
// 	};

// 	render() {
// 		const { isConfirmed } = this.state;

// 		return (
// 			<>
// 				<h1>Kup bilet na horror roku!</h1>
// 				<OrderForm
// 					change={this.handleCheckboxChange}
// 					submit={this.handleFormSubmit}
// 					checked={isConfirmed}
// 				/>
// 				{this.displayMessage()}
// 			</>
// 		);
// 	}
// }

// ReactDOM.render(<TicketShop />, document.getElementById("root"));

// class App extends React.Component {
// 	state = {
// 		availableProducts: 9,
// 		shoppingCart: 1,
// 	};

// 	handleRemoveFromCart = () => {
// 		this.setState({
// 			shoppingCart: this.state.shoppingCart - 1,
// 		});
// 	};

// 	handleAddToCart = () => {
// 		this.setState({
// 			shoppingCart: this.state.shoppingCart + 1,
// 		});
// 	};

// 	handleBuy = () => {
// 		this.setState({
// 			availableProducts: this.state.availableProducts - this.state.shoppingCart,
// 			shoppingCart: 0,
// 		});
// 	};
// 	render() {
// 		const { shoppingCart, availableProducts } = this.state;

// 		const style = shoppingCart === 0 ? { opacity: 0.3 } : {};
// 		return (
// 			<div>
// 				<button
// 					onClick={this.handleRemoveFromCart}
// 					disabled={shoppingCart === 0 ? true : false}>
// 					-
// 				</button>

// 				<span style={style}>{shoppingCart} </span>

// 				<button
// 					disabled={shoppingCart === availableProducts ? true : false}
// 					onClick={this.handleAddToCart}>
// 					+
// 				</button>
// 				{shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<App />, document.getElementById("root"));

const data = {
	users: [
		{
			id: 1,
			age: 29,
			name: "Arek",
			sex: "male",
		},
		{
			id: 2,
			age: 49,
			name: "Marta",
			sex: "female",
		},
		{
			id: 3,
			age: 19,
			name: "Stasia",
			sex: "female",
		},
		{
			id: 4,
			age: 24,
			name: "Karol",
			sex: "male",
		},
	],
};

const Item = ({ user }) => (
	<div className='userInfo'>
		<h1>{user.name}</h1>
		<p>Informacje o użytkowniku</p>
		<p>
			Wiek użytkownika:<strong>{user.age}</strong>
		</p>
		<p>
			Płeć użytkownika: <strong>{user.sex}</strong>
		</p>
	</div>
);

class ListItems extends React.Component {
	state = {
		select: "all",
	};

	handleUsersFilter = option => {
		this.setState({
			select: option,
		});
	};

	usersList = () => {
		let users = this.props.data.users;
		switch (this.state.select) {
			case "all":
				return users.map(user => <Item user={user} key={user.id} />);
			case "female":
				users = users.filter(user => user.sex === "female");
				return users.map(user => <Item user={user} key={user.id} />);
			case "male":
				users = users.filter(user => user.sex === "male");
				return users.map(user => <Item user={user} key={user.id} />);
			default:
				return "Brak danych"
		}
	};
	render() {
		return (
			<div>
				<button onClick={() => this.handleUsersFilter("all")}>Wszyscy</button>
				<button onClick={() => this.handleUsersFilter("female")}>
					Kobiety
				</button>
				<button onClick={() => this.handleUsersFilter("male")}>
					Mężczyźni
				</button>
				{this.usersList()}
			</div>
		);
	}
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
