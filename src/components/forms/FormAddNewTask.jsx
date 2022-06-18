import clsx from 'clsx'
import { useState } from 'react'
import PlusIcon from '../../Icons/plus.svg';
import css from './Forms.module.css'

const FormAddNewTask = props => {
	const {formSubmit, isFormVisible, setFormVisible, handleAddNewClick} = props
	const initialState = {
		title: "",
		description: "",
		error: undefined,
	  };
	  const [values, setValues] = useState(initialState);

	const handleChange = (e) =>{
		const fieldName = e.target.name
		setValues ({...values, [fieldName]: e.target.value})

		
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (values.title) {
		  formSubmit(values.title, values.description, values.error);
		  setFormVisible(false);
		  setValues(initialState);
		} else {
		  setValues({ ...values, error: "To add a task enter a title" });
		  setFormVisible(false);
		}
	  }

	if(isFormVisible) {
	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<input
				className={css.input}
				id='taskTitle'
				name='title'
				type='text'
				placeholder='Enter task title'
				value={values.title}
				onChange={handleChange}
			/>
			<textarea
				className={clsx(css.input, css.textarea)}
				id='taskDescription'
				name='description'
				placeholder='Enter task description'
				value={values.description}
			/>
			<button className={clsx(css.button, css.submit)}  onClick={handleSubmit} type='submit'>Submit</button>
		</form>
	)
	}
	return (
		<>
		<div className='error'>{values.error}</div>
		<button className={clsx(css.button, css.add)} onClick={handleAddNewClick}>
		  <img src={PlusIcon} alt='plus icon' className={css.plus_icon}/>
				  Add card
			  </button>
		</>      
	  )
}

export default FormAddNewTask
