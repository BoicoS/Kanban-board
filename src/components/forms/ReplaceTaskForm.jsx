import React, {useRef, useState} from 'react';
import PlusIcon from '../../Icons/plus.svg';
import clsx from 'clsx'
import css from './Forms.module.css'
// import SelectBox from '../select/select';
// import Select from 'react-select'
// import '../select/Select.module.css'

function ReplaceTaskForm(props) {
	const {tasks, replaceTasks, setTasks, isFormVisible, setFormVisible, handleAddNewClick, newStatus} = props;
	const id = useRef();
	


	// const options = [
	// 	{ value: 'chocolate', label: 'Chocolate' },
	// 	{ value: 'strawberry', label: 'Strawberry' },
	// 	{ value: 'vanilla', label: 'Vanilla' }
	//   ]

	//   const options = replaceTasks.map(task => {
	// 			return 
	// 			// <option key={task.id} value={task.id} className={css.option}>{task.title}</option>;
	// 			{value: {task.value}}
				

	// 		})




// 	  const [item, setItem] = useState(replaceTasks || []);
//   const [showItems, setshowItems] = useState(false);
//   const [selectedItem, setselectedItem] = useState("123");
	
	//   function dropDown()  {
	// 	// setState(prevState => ({
	// 	//   showItems: !prevState.showItems
	// 	// }));
	// 	setshowItems(prevState =>!showItems)
	// 	// setCounter(prevState => prevState + 1);
	//   };
	
	//  function selectItem  (e) {
	// 	// this.setState({
	// 	//   selectedItem: item,
	// 	//   showItems: false
	// 	// });
	// 	setselectedItem(e.target.value)
	// 	setshowItems(false)
	//   };


	function replaceTask(e) {
		const updatedTasks = tasks.map(task => {
		if (task.id === id.current.value) {
			return {...task, status: newStatus, value: e.target.value}
		}
		return task
		});

		const filteredTasks = tasks.filter(task => task.id !== id.current.value);
		const taskToAdd = updatedTasks.find(task => task.id === id.current.value);
		const newUpdatedTasks = [...filteredTasks, taskToAdd];

		setTasks(newUpdatedTasks);
		setFormVisible(!isFormVisible);
	}

	function disableButton() {
		let disabled = false;
		if(replaceTasks.length === 0) {
			disabled = true;
			return disabled
		}
		return disabled
	}

	

  	if(isFormVisible) {
    	return (
			<>
			<div className={css.selectBlock}>
				<select ref={id} className={css.select} onChange={replaceTask} >
				<option className={css.option}></option>
				{replaceTasks.map(task => {
					return <option key={task.id} value={task.id} className={css.option}>{task.title}</option>;
				})}
				</select>
		
			</div>
			</>

		// <Select  options = {options} onChange={replaceTask}/>





		);
  	}
	return (
		<button disabled={disableButton()} className={clsx(css.button, css.add)} onClick={handleAddNewClick}>
			<img src={PlusIcon} alt='plus icon' className={css.plus_icon}/>
			Add card
		</button>
	);
}

export default ReplaceTaskForm;