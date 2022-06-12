import css from './Main.module.css'
import Board from '../board/Board'

const Main = (props) => {
	return (
		<main className={css.main}>
		
					<Board {...props} />
			
		</main>
	)
}

export default Main
