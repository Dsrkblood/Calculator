import React, { Component } from "react";
import "./App.css";
// Rosnąca baza danych
const data = [
	{
		id: 1,
		title: "Wiadomość numer 1",
		body: "Zawartość wiadomości numer 1 ...",
	},
	{
		id: 2,
		title: "Wiadomość numer 2",
		body: "Zawartość wiadomości numer 2 ...",
	},
];
// Dodawanie danych do tablicy co 4s
setInterval(() => {
	const index = data.length + 1;
	data.push({
		id: index,
		title: `Wiadomośc numer ${index}`,
		body: `Zawartość wiadomości numer ${index} ...`,
	});
}, 4000);

class App extends Component {
	state = {
		comments: [...data],
	};

	getData = () => {
		if (this.state.comments.length !== data.length) {
			this.setState({
				comments: [...data],
			});
		} else {
			console.log("dane tekie same");
		}
	};

	componentDidMount() {
		this.idI = setInterval(this.getData, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.idI);
	}

	render() {
		const comments = this.state.comments.map(comment => (
			<div key={comment.id}>
				<h4>{comment.title}</h4>
				<h5>{comment.body}</h5>
			</div>
		));

		return <div className='App'>{comments.reverse()}</div>;
	}
}

export default App;
