import React from "react";

const SwitchButton = props => (
	<>
		<button onClick={props.click}>{props.active ? "Stop" : "Start"}</button>
		<button onClick={props.reset}>Reset</button>
	</>
);

export default SwitchButton;
