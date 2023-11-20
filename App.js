class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0
		};
		console.log("Wywołanie motody constructor");
	}

	componentWillMount(){
		console.log("componentWillMount");
	}

	componentDidMount(){
		console.log("componentDidMount");
		this.setState({
			number: 1
		})
	}
	componentDidUpdate(){
		console.log("componentDidUpdate");
	}

	render() {
		console.log("Wywoładan metoda render()");
		
		return (
			<>
				<p>lifecycle-montowanie komponentu</p>
				<Child />
			</>
		);
	}
}

class Child extends React.Component{
	componentDidMount(){
		console.log("componentDidMount w Child");
		// this.setState({
		// 	number: 1
		// })
	}
	render(){
		console.log("wywołanie render na Child");
		return(
			<h1>dziecko</h1>
		)
	}
}

ReactDOM.render(<List />, document.getElementById("root"));
