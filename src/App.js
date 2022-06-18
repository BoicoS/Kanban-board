import React from 'react'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import data from './mock.json'

function App() {
	const [tasks, setTasks] = useState(data)
  return (
	<BrowserRouter>
		<div className='wrapper'>
			<Header />
			<Main tasks={tasks} setTasks={setTasks}/>
			<Footer tasks={tasks} />
		</div>
		</BrowserRouter>
  )
}

export default App
