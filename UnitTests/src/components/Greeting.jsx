import Output from "./Output";
import { useState } from "react";

export default function Greating() {
	const [changedText, setChangedText] = useState(false);

	function changeTextHandler() {
		setChangedText(true);
	}

	return (
		<div>
			<h2>Hello World!</h2>
			{!changedText && <Output>It's good to see you!</Output>}
			{changedText && <Output>Changed!</Output>}
			<button onClick={changeTextHandler}>Change text</button>
		</div>
	);
}
