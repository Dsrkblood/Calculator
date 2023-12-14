import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const inputIsValidDuration = userInput.duration >= 1;
	const inputIsValidReturn = userInput.expectedReturn > 0;

	function handleChange(inputIndentifier, newValue) {
		setUserInput(prevUserInput => {
			return {
				...prevUserInput,
				[inputIndentifier]: +newValue,
			};
		});
	}

	return (
		<>
			<Header />
			<UserInput onChange={handleChange} userInput={userInput} />
			{!inputIsValidDuration && (
				<p className='center'>Please enter a duration greater then zero.</p>
			)}
			{!inputIsValidReturn && (
				<p className='center'>
					Please enter a expected return greater then zero.
				</p>
			)}
			{inputIsValidDuration && inputIsValidReturn && (
				<Results userInput={userInput} />
			)}
		</>
	);
}

export default App;
