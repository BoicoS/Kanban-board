
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { LIST_TYPES } from '../../config'
import FormAddNewTask from '../forms/FormAddNewTask'
import ReplaceTaskForm from '../forms/ReplaceTaskForm';
import css from './List.module.css'

const List = (props) => {
	const {type, title, tasks, addNewTask, setTasks, allTasks} = props
	const [isFormVisible, setFormVisible] = useState(false)
	const backlogTasks = allTasks.filter(task => task.status === LIST_TYPES.BACKLOG);
	const readyTasks = allTasks.filter(task => task.status === LIST_TYPES.READY);
	const inProgressTasks = allTasks.filter(task => task.status === LIST_TYPES.IN_PROGRESS);
	
	const handleClick = () => {
		setFormVisible (!isFormVisible)
	}
	function handleAddNewClick() {
		setFormVisible(!isFormVisible);
	};
	function formSubmit(title, description) {
		addNewTask(title, description);
	};


	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			{tasks.map (task => {
				return (
					<Link to={`/tasks/${task.id}`} className={css.taskLink}>
					<div key={task.id} className={css.task}>{task.title}</div>
					</Link>
					
			)
			
			})}
			
		{/* {type === LIST_TYPES.BACKLOG && (
			<button className={css.addButton} onClick={handleClick}>+ Add new card</button>
		)}

		{type === LIST_TYPES.BACKLOG && isFormVisible && (
			<FormAddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible}/>

		)} */}

		{type === LIST_TYPES.BACKLOG &&
					<FormAddNewTask formSubmit={formSubmit} isFormVisible={isFormVisible} setFormVisible={setFormVisible} handleAddNewClick={handleAddNewClick} />}

		{type === LIST_TYPES.READY &&
					<ReplaceTaskForm isFormVisible={isFormVisible} setFormVisible={setFormVisible} handleAddNewClick={handleAddNewClick} tasks={allTasks} replaceTasks={backlogTasks} setTasks={setTasks} newStatus={LIST_TYPES.READY}/>}

				{type === LIST_TYPES.IN_PROGRESS &&
					<ReplaceTaskForm isFormVisible={isFormVisible} setFormVisible={setFormVisible} handleAddNewClick={handleAddNewClick} tasks={allTasks} replaceTasks={readyTasks} setTasks={setTasks} newStatus={LIST_TYPES.IN_PROGRESS} />}

				{type === LIST_TYPES.DONE &&
					<ReplaceTaskForm isFormVisible={isFormVisible} setFormVisible={setFormVisible} handleAddNewClick={handleAddNewClick} tasks={allTasks} replaceTasks={inProgressTasks} setTasks={setTasks} newStatus={LIST_TYPES.DONE} />}
		</div>
		
	)	
	
}

export default List
