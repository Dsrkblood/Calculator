import "./App.css";
import { TasksList } from "./components/TasksList";

import { useState, useEffect } from "react";

function App() {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		console.log("Counter: "+counter);
	}, [counter]);
	return (
		<div>
			{/* <TasksList /> */}

			<button onClick={() => setCounter(counter + 1)}>{counter}</button>
		</div>
	);
}

export default App;
