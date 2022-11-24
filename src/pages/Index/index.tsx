import { useAtom } from 'jotai'
import { useState } from 'react'
import SettingsForm from '../../components/SettingsForm'
import Sprite from '../../components/Sprite'
import TemplateEditor from '../../components/TemplateEditor'
import { bgColorAtom } from '../../lib/store/settings'
import templateAtom from '../../lib/store/template'
import style from './style.module.css'

function Index() {
	const [template, setTemplate] = useAtom(templateAtom)
	const [counter, setCounter] = useState(0)
	const [bgColor] = useAtom(bgColorAtom)
	return (
		<>
			<header className={style.header}>
				<SettingsForm />
			</header>
			<main className={style.main}>
				<TemplateEditor />
				<div className={style.spriteSheet}>
					<button type="button" onClick={() => setCounter(counter + 1)}>
						refresh
					</button>
					<div
						className={style.spriteWrapper}
						style={{ backgroundColor: bgColor }}
					>
						<Sprite template={template} />
					</div>
				</div>
			</main>
		</>
	)
}

export default Index
