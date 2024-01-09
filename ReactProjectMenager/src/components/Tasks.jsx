import NewTask from "./NewTask";
import { ProjectContext } from "../store/project-context";
import { useContext } from "react";

export default function Task() {
	const { allProjects, onDeleteTask, project } = useContext(ProjectContext);
	const tasks = allProjects.tasks;
	let actualTasks = tasks.filter(task => task.projectId === project.id);

	return (
		<section>
			<h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
			<NewTask/>
			{actualTasks.length === 0 && (
				<p className='text-stone-800 my-4'>
					This project doesn't have any tasks yet.
				</p>
			)}
			{actualTasks.length > 0 && (
				<ul className='p-4 mt-8 rounded-md bg-stone-100'>
					{actualTasks.map(task => (
						<li key={task.id} className='flex justify-between my-4'>
							<span>{task.text}</span>
							<button
								className='text-stone-700 hover:text-red-500'
								onClick={() => onDeleteTask(task.id)}>
								Clear
							</button>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
