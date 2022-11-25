import { useAtom } from 'jotai'
import SettingsForm from '../../components/SettingsForm'
import Sprite from '../../components/Sprite'
import TemplateEditor from '../../components/TemplateEditor'
import { useSetRoute } from '../../lib/store/route'
import { bgColorAtom } from '../../lib/store/settings'
import style from './style.module.css'

function Index() {
	const [bgColor] = useAtom(bgColorAtom)
	const setRoute = useSetRoute()
	return (
		<>
			<main className={style.main}>
				<TemplateEditor />
				<div className={style.spriteSheet}>
					<div
						className={style.spriteWrapper}
						style={{ backgroundColor: bgColor }}
					>
						<Sprite />
						<Sprite />
						<Sprite />
						<Sprite />
						<Sprite />
						<Sprite />
						<Sprite />
						<Sprite />
						<Sprite />
					</div>
				</div>
				<button
					type="button"
					className={style.button}
					onClick={() => setRoute('View')}
				>
					{'>'}
				</button>
			</main>
			<footer className={style.footer}>
				<SettingsForm />
			</footer>
		</>
	)
}

export default Index
