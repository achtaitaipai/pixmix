import { Link } from '@swan-io/chicane'
import { useAtom } from 'jotai'
import Sprite from '../../components/Sprite'
import { bgColorAtom } from '../../lib/store/settings'
import Router from '../../Router'
import style from './style.module.css'

function View() {
	const [bgColor] = useAtom(bgColorAtom)
	return (
		<main className={style.main} style={{ backgroundColor: bgColor }}>
			<Link to={Router.Home()}>{'<'}</Link>
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
