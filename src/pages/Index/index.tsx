import { useAtom } from 'jotai'
import { useState } from 'react'
import SettingsForm from '../../components/SettingsForm'
import Sprite from '../../components/Sprite'
import TemplateEditor from '../../components/TemplateEditor'
import { bgColorAtom } from '../../lib/store/settings'
import templateAtom from '../../lib/store/template'
import style from './style.module.css'

function Index() {
	const [template] = useAtom(templateAtom)
	const [refresh, setRefresh] = useState(false)
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
						<Sprite template={template} />
						<Sprite template={template} />
						<Sprite template={template} />
						<Sprite template={template} />
						<Sprite template={template} />
						<Sprite template={template} />
						<Sprite template={template} />
						<Sprite template={template} />
						<Sprite template={template} />
					</div>
				</div>
			</main>
			<footer className={style.footer}>
				<SettingsForm />
			</footer>
		</>
	)
}

export default Index
