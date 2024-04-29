import logo from "./logo.svg";
import "./App.css";
import Greating from "./components/Greeting";
import Async from "./components/Async";

function App() {
	return (
		<div className='App'>
			<Greating />
			<Async />
		</div>
	);
}

export default App;
