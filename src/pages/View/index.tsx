import { useAtom } from 'jotai'
import Sprite from '../../components/Sprite'
import { useSetRoute } from '../../lib/store/route'
import { bgColorAtom } from '../../lib/store/settings'
import style from './style.module.css'

function View() {
	const [bgColor] = useAtom(bgColorAtom)
	const setRoute = useSetRoute()
	return (
		<main className={style.main} style={{ backgroundColor: bgColor }}>
			<button
				type="button"
				className={style.button}
				onClick={() => setRoute('Home')}
			>
				{'<'}
			</button>
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
			<Sprite />
		</main>
	)
}

export default View
