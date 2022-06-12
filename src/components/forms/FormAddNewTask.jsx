import clsx from 'clsx'
import { useState } from 'react'
import css from './Forms.module.css'

const FormAddNewTask = props => {
	const [addNewTask] = props
	const [values, setValues] = useState({
		title: '',
		description: ''
	})

	const handleChange = (e) =>{
		const fieldName = e.target.name
		setValues ({...values, [fieldName]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.target.preventDefault()
		if(values.title){
			addNewTask(values.title, values.description)
		}


	}
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
			<button className={css.submit} type='submit'>Add</button>
		</form>
	)
}

export default FormAddNewTask
