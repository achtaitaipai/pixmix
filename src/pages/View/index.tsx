import { useAtom } from 'jotai'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import PreviewSprite from '../../components/PreviewSprite'
import Sprite from '../../components/Sprite'
import createSprite, { renderSprite } from '../../lib/sprite'
import { useSetRoute } from '../../lib/store/route'
import { bgColorAtom, settingsAtom } from '../../lib/store/settings'
import templateAtom from '../../lib/store/template'
import style from './style.module.css'

function View() {
	const [selected, setSelected] = useState<number | null>(null)
	const [settings] = useAtom(settingsAtom)
	const [template] = useAtom(templateAtom)
	const [bgColor] = useAtom(bgColorAtom)
	const setRoute = useSetRoute()
	const loaderRef = useRef<HTMLElement>(null)

	const addSprites = useCallback(() => {
		const newSprites: { id: number; src: string }[] = []
		for (let i = 0; i < 64; i += 1) {
			const grid = createSprite(template, settings.mirrorX, settings.mirrorY)
			const src = renderSprite(grid, 1, [
				settings.strokeColor,
				settings.bodyColor,
			])
			newSprites.push({ id: i, src })
		}
		return newSprites
	}, [settings, template])
	const [sprites, setSprites] = useState<{ id: number; src: string }[]>(
		addSprites()
	)
	addSprites()
	const observer = useMemo(() => {
		const callBack: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) setSprites((spr) => [...spr, ...addSprites()])
			})
		}
		return new IntersectionObserver(callBack, {
			root: null,
			rootMargin: '0px',
			threshold: 1.0,
		})
	}, [addSprites])

	useEffect(() => {
		const footer = loaderRef.current
		if (!footer) return

		observer.observe(footer)
		return () => {
			observer.unobserve(footer)
		}
	}, [loaderRef, observer])

	return (
		<>
			<main className={style.main} style={{ backgroundColor: bgColor }}>
				<button
					type="button"
					className={style.prevLink}
					onClick={() => setRoute('Home')}
				>
					{'<'}
				</button>
				{sprites.map(({ src }, i) => (
					<button
						key={src + i.toString()}
						type="button"
						className={style.btnSprite}
						onClick={(e) => {
							if (!selected) {
								e.stopPropagation()
								setSelected(i)
							}
						}}
					>
						<Sprite src={src} />
					</button>
				))}
				{selected && (
					<PreviewSprite
						{...sprites[selected]}
						close={() => setSelected(null)}
					/>
				)}
			</main>
			<span className={style.footer} ref={loaderRef}>
				Loading ...
			</span>
		</>
	)
}

export default View
