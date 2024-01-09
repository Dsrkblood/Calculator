import { createContext, useState } from "react";
import SelectedProject from "../components/SelectedProject";
import NewProject from "../components/NewProject";
import NoProjectSelected from "../components/NoProjectSelected";

export const ProjectContext = createContext({
	selectedProjectId: undefined,
	projects: [],
	tasks: [],
	projject: {},
	onStartAddProject: () => {},
	onSelectProject: () => {},
	selectedProjectId: () => {},
});

export default function ProjectContextProvider({ children }) {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: [],
		tasks: [],
	});

	function handleAddTask(text) {
		setProjectsState(prevState => {
			const taskId = Math.random();
			const newTask = {
				text: text,
				projectId: prevState.selectedProjectId,
				id: taskId,
			};
			return {
				...prevState,
				tasks: [newTask, ...prevState.tasks],
			};
		});
	}

	function handleDeleteTask(id) {
		setProjectsState(prevState => {
			return {
				...prevState,
				tasks: prevState.tasks.filter(task => task.id !== id),
			};
		});
	}

	function handleDeleteProject() {
		setProjectsState(prevState => {
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

	let content = (
		<SelectedProject
			project={selectedProject}
			onDelete={handleDeleteProject}
			onAddTask={handleAddTask}
			onDeleteTask={handleDeleteTask}
			tasks={projectsState.tasks}
		/>
	);

	if (projectsState.selectedProjectId === null) {
		content = (
			<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
		);
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}

	const ctxValue = {
		// selectedProjectId: undefined,
		// projects: [],
		// tasks: [],
		allProjects: projectsState,
		onStartAddProject: handleStartAddProject,
		onSelectProject: handleSelectProject,
		selectedProjectId: projectsState.selectedProjectId,
		onDelete: handleDeleteProject,
		onAddTask: handleAddTask,
		onDeleteTask: handleDeleteTask,
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
