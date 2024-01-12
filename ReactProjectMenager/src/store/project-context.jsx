import { createContext, useState } from "react";
import SelectedProject from "../components/SelectedProject";
import NewProject from "../components/NewProject";
import NoProjectSelected from "../components/NoProjectSelected";

export const ProjectContext = createContext({
	project: "",
	allProjects: "",
	onStartAddProject: () => {},
	onSelectProject: () => {},
	onDelete: () => {},
	onAddTask: () => {},
	onDeleteTask: () => {},
	onAddProject: () => {},
	onCancelProject: () => {},
});

const storedProjects = JSON.parse(localStorage.getItem("storedProject")) || [];
const storedTasks = JSON.parse(localStorage.getItem("storedTask")) || [];

export default function ProjectContextProvider({ children }) {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: storedProjects,
		tasks: storedTasks,
	});

	function handleAddTask(text) {
		setProjectsState(prevState => {
			const taskId = Math.random();
			const newTask = {
				text: text,
				projectId: prevState.selectedProjectId,
				id: taskId,
			};
			const storedTasks = JSON.parse(localStorage.getItem("storedTask")) || [];
			if (storedProjects.indexOf(newTask) === -1) {
				localStorage.setItem(
					"storedTask",
					JSON.stringify([newTask, ...prevState.tasks])
				);
			}

			return {
				...prevState,
				tasks: [newTask, ...prevState.tasks],
			};
		});
	}

	function handleDeleteTask(id) {
		setProjectsState(prevState => {
			const storedTasks = JSON.parse(localStorage.getItem("storedTask")) || [];
			localStorage.setItem(
				"storedTask",
				JSON.stringify(storedTasks.filter(task => task.id !== id))
			);
			return {
				...prevState,
				tasks: prevState.tasks.filter(task => task.id !== id),
			};
		});
	}
	function handleDeleteProject() {
		setProjectsState(prevState => {
			const storedProjects =
				JSON.parse(localStorage.getItem("storedProject")) || [];
			localStorage.setItem(
				"storedProject",
				JSON.stringify(
					storedProjects.filter(
						project => project.id !== prevState.selectedProjectId
					)
				)
			);

			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter(
					project => project.id !== prevState.selectedProjectId
				),
			};
		});
	}

	function handleSelectProject(id) {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: id,
			};
		});
	}

	function handleStartAddProject() {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	}

	function handleCancelAddProject() {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
			};
		});
	}

	function handleAddProject(projectData) {
		setProjectsState(prevState => {
			const projectId = Math.random();
			const newProject = {
				...projectData,
				id: projectId,
			};

			const storedProjects =
				JSON.parse(localStorage.getItem("selectedProject")) || [];
			if (storedProjects.indexOf(newProject.id) === -1) {
				localStorage.setItem(
					"storedProject",
					JSON.stringify([...prevState.projects, newProject])
				);
			}

			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	}

	const selectedProject = projectsState.projects.find(
		project => project.id === projectsState.selectedProjectId
	);

	let content = <SelectedProject />;

	if (projectsState.selectedProjectId === null) {
		content = <NewProject />;
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected />;
	}

	const ctxValue = {
		project: selectedProject,
		allProjects: projectsState,
		onStartAddProject: handleStartAddProject,
		onSelectProject: handleSelectProject,
		onDelete: handleDeleteProject,
		onAddTask: handleAddTask,
		onDeleteTask: handleDeleteTask,
		onAddProject: handleAddProject,
		onCancelProject: handleCancelAddProject,
	};

	return (
		<ProjectContext.Provider value={ctxValue}>
			<main className='h-screen my-8 flex gap-8'>
				{children}
				{content}
			</main>
		</ProjectContext.Provider>
	);
}
