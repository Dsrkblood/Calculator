import { useState, useRef, useContext } from "react";
import { ProjectContext } from "../store/project-context";
import Modal from "./Modal";

export default function NewTask() {
	const { onAddTask } = useContext(ProjectContext);
	
	const modal = useRef();
	const [eneteredTask, setEnteredTask] = useState("");

	function handleChange(event) {
		setEnteredTask(event.target.value);
	}

	function handleClick() {
		if (eneteredTask.trim() === "") {
			modal.current.open();
			return;
		}
		onAddTask(eneteredTask);
		setEnteredTask("");
	}

	return (
		<div className='flex items-center gap-4'>
			<Modal ref={modal} buttonCaption='Close'>
				<h2 className='text-xl font-bold text-stone-800 my-4'>Invalid Input</h2>
				<p className='text-stone-700 mb-4'>
					Ooops... you can't add an empty task
				</p>
				<p className='text-stone-700 mb-4'>
					{" "}
					Please enter the task in the input field.
				</p>
			</Modal>
			<input
				type='text'
				className='w-64 px-2 py-1 rounded-sm bg-stone-200'
				onChange={handleChange}
				value={eneteredTask}
			/>
			<button
				className='text-stone-700 hover:text-stone-950'
				onClick={handleClick}>
				Add Task
			</button>
		</div>
	);
}
