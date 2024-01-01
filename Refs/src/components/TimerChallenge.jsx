import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
	const timer = useRef();
	const dialog = useRef();

	// const [timerStarted, setTimerStarted] = useState(false);
	// const [timerExpired, setTimerExpired] = useState(false);
	const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

	function handleStart() {
		timer.current = setInterval(() => {
			// setTimerExpired(true);
			// dialog.current.open();
			setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
		}, 10);

		setTimerStarted(true);
	}

	function handleStop() {
		clearTimeout(timer.current);
	}

	return (
		<>
			<ResultModal ref={dialog} targetTime={targetTime} result='lost' />

			<section className='challenge'>
				<h2>{title}</h2>
				<p className='chalenge-time'>
					{targetTime} second{targetTime > 1 ? "s" : ""}
				</p>
				<p>
					<button onClick={timerStarted ? handleStop : handleStart}>
						{timerStarted ? "Stop " : "Start "}Challenge
					</button>
				</p>
				<p className={timerStarted ? "active" : undefined}>
					{timerStarted ? "Time is running..." : "Timer inactive"}
				</p>
			</section>
		</>
	);
}
