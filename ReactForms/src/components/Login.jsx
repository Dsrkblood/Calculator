import { useState } from "react";

export default function Login() {
	const [enteredValues, setEnteredValues] = useState({
		email: {
			value: "",
			didEdit: false,
		},
		password: {
			value: "",
			didEdit: false,
		},
	});
	const emailIsInvalid =
		enteredValues.email.didEdit && !enteredValues.email.value.includes("@");

	function handleValueChange(event, identifier) {
		setEnteredValues(prevValues => ({
			...prevValues,
			[identifier]: {
				...prevValues[identifier],
				value: event.target.value,
				didEdit: false,
			},
		}));
	}

	function handleInputBlur(identifier) {
		setEnteredValues(prevEdit => ({
			...prevEdit,
			[identifier]: {
				...prevEdit[identifier],
				didEdit: true,
			},
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className='control-row'>
				<div className='control no-margin'>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='email'
						name='email'
						onBlur={() => handleInputBlur("email")}
						onChange={event => handleValueChange(event, "email")}
						value={enteredValues.email.value}
					/>
					<div className='control-error'>
						{emailIsInvalid && <p>Please enter a valid email address.</p>}
					</div>
				</div>

				<div className='control no-margin'>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
						onBlur={() => handleInputBlur("password")}
						onChange={event => handleValueChange(event, "password")}
						value={enteredValues.password.value}
					/>
				</div>
			</div>

			<p className='form-actions'>
				<button className='button button-flat'>Reset</button>
				<button className='button'>Login</button>
			</p>
		</form>
	);
}
