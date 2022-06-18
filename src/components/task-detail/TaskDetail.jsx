import css from './TaskDetail.module.css'
import CrossIcon from '../../Icons/cross.svg';
import { useRouteMatch, Link } from 'react-router-dom'
import React from 'react'
import { useState, useRef } from 'react'
import { LIST_TYPES } from '../../config';

const TaskDetail = props => {
	const match = useRouteMatch()
	const {taskId} = match.params
	const {tasks, setTasks} = props
	
	const task = tasks.find(task => task.id === taskId)
	const [clicked, setClicked] = useState(false);
	const description = useRef();

	function submitEditText() {
		setClicked(!clicked);
	}

	function editNewText() {
		const newDescription = description.current.value;
		const currentID = description.current.id;
		const updatedTasks = tasks.map(task => {
			if (task.id === currentID) {
				return {...task, description: newDescription}
			}
			return task
			});
		setTasks(updatedTasks);
	}
	function renderTaskDetails() {
	return(
		<div className={css.wrapper}>
		<div className={css.header}>
		<h2 className={css.title}>{task.title}</h2>
		<p>Description:</p><div className={css.edit}>
					{clicked ?
						<>
							<textarea 
							className={css.edit_text} 
							ref={description} 
							onChange={editNewText} 
							value={task.description} 
							id={task.id}> {task.description}
							</textarea>
							<button type='submit' onClick={submitEditText} className={css.button}>Submit</button>
						</>
						:
						<>
							<p>{task.description || 'This task has no description.'}</p>
							<button onClick={submitEditText} className={css.button}>Edit text</button>
						</>
					}
				</div>


		</div>

		</div>

	)	}


	


const renderEmptyState = () => {
	return (
		<div className='empty-state'>
			<p>Task with ID <span className='task-not-found'>{taskId}</span> was not found.</p>
		</div>
	);


}

return (
	<div className={css.detail}>
		<Link className={css.home_link} to='/'>
			<img src={CrossIcon} alt='cross icon'/>
		</Link>
		{task ? renderTaskDetails() : renderEmptyState()}
	</div>
)

}


export default TaskDetail

{/* <select className={css.select} value={task.status}></select> */}
// {Object.values(LIST_TYPES).map(type =>{return (
// 	<option value={type}>{LIST_COPY[type]}</option>
// )

// })}
 