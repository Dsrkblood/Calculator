import { useState } from "react";

export default function UserInput() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	function HandleChange(inputIndentifier, newValue) {
		setUserInput(prevUserInput => {
			return {
				...prevUserInput,
				[inputIndentifier]: newValue,
			};
		});
	}
	return (
		<section id='user-input'>
			<div className='input-group'>
				<p>
					<label>Initial Investment</label>
					<input
						type='number'
						value={userInput.initialInvestment}
						required
						onChange={event =>
							HandleChange("initialInvestment", event.target.value)
						}
					/>
				</p>
				<p>
					<label>Annual Investment</label>
					<input
						type='number'
						value={userInput.annualInvestment}
						required
						onChange={event =>
							HandleChange("annualInvestment", event.target.value)
						}
					/>
				</p>
			</div>
			<div className='input-group'>
				<p>
					<label>Expected Return</label>
					<input
						type='number'
						value={userInput.expectedReturn}
						required
						onChange={event =>
							HandleChange("expectedReturn", event.target.value)
						}
					/>
				</p>
				<p>
					<label>Duration</label>
					<input
						type='number'
						value={userInput.duration}
						required
						onChange={event => HandleChange("duration", event.target.value)}
					/>
				</p>
			</div>
		</section>
	);
}
