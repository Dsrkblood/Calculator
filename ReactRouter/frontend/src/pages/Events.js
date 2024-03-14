import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
	{
		id: "e1",
		title: "Some event",
	},
	{
		id: "e2",
		title: "Some event",
	},
	{
		id: "e3",
		title: "Some event",
	},
];
export default function EventPages() {
	return (
		<>
			<h1>Event Pages</h1>
			{DUMMY_EVENTS.map(event => (
				<li key={event.id}>
					<Link to={event.id}>{event.title}</Link>
				</li>
			))}
		</>
	);
}
