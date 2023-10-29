import { useRef, useState } from "react";
// import { tasks as tasksData } from "../data/tasks";

export function TasksList() {
	const [tasks, setTasks] = useState([]);

	const titleRef = useRef(null);
	const descriptionRef = useRef(null);

	const handleAddTask = () => {
		const newTasks = [...tasks];
		if (titleRef.current.value !== "" && descriptionRef.current.value !== "") {
			newTasks.push({
				title: titleRef.current.value,
				description: descriptionRef.current.value,
				completed: false,
			});
		}
		setTasks(newTasks);
	};

	const handleToogleTasksState = index => {
		const newTasks = [...tasks];
		newTasks[index].completed = !newTasks[index].completed;
		setTasks(newTasks);
	};

	const handleDeleteTask = index => {
		const newTasks = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	};

	return (
		<>
			<input type='text' id='title' ref={titleRef} />
			<input type='text' id='description' ref={descriptionRef} />
			<button onClick={handleAddTask}>Add new task</button>
			{tasks.length === 0 ? (
				<div>Empty tasks list.</div>
			) : (
				<ul>
					{tasks.map(({ title, completed }, index) => (
						<li
							key={index}
							style={{
								textDecoration: completed ? "line-through" : "none",
							}}>
							{title}
							<button onClick={() => handleToogleTasksState(index)}>
								{completed ? "Undo" : "Complet"}
							</button>
							<button onClick={() => handleDeleteTask(index)}>Delete</button>
						</li>
					))}
				</ul>
			)}
		</>
	);
}
