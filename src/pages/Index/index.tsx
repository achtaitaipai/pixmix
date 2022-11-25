import { Link } from '@swan-io/chicane'
import { useAtom } from 'jotai'
import SettingsForm from '../../components/SettingsForm'
import Sprite from '../../components/Sprite'
import TemplateEditor from '../../components/TemplateEditor'
import { bgColorAtom } from '../../lib/store/settings'
import templateAtom from '../../lib/store/template'
import Router from '../../Router'
import style from './style.module.css'

function Index() {
	const [template] = useAtom(templateAtom)
	const [bgColor] = useAtom(bgColorAtom)
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
				<Link to={Router.View()}>{'>'}</Link>
			</main>
			<footer className={style.footer}>
				<SettingsForm />
			</footer>
		</>
	)
}

export default Index
