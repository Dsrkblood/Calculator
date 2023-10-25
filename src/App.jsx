import "./App.css";
import { users } from "./data/users";
function App() {
	return (
		<div>
			{users.map((user, index) => {
				return (
					<div key={index}>
						{user.name} - {user.age}
					</div>
				);
			})}
		</div>
	);
}

export default App;
