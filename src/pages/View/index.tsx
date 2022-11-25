import { useAtom } from 'jotai'
import { useEffect, useMemo, useRef, useState } from 'react'
import Sprite from '../../components/Sprite'
import { useSetRoute } from '../../lib/store/route'
import { bgColorAtom } from '../../lib/store/settings'
import style from './style.module.css'

function View() {
	const [bgColor] = useAtom(bgColorAtom)
	const setRoute = useSetRoute()
	const loaderRef = useRef<HTMLElement>(null)
	const [sprites, setSprites] = useState<number[]>(addSprites())
	function addSprites() {
		const newSprites: number[] = []
		for (let i = 0; i < 64; i += 1) {
			newSprites.push(i)
		}
		return newSprites
	}

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
	}, [])

	useEffect(() => {
		const footer = loaderRef.current
		if (!footer) return

		observer.observe(footer)
		// eslint-disable-next-line consistent-return
		return () => {
			observer.unobserve(footer)
		}
	}, [loaderRef, observer])
	return (
		<>
			<main className={style.main} style={{ backgroundColor: bgColor }}>
				<button
					type="button"
					className={style.button}
					onClick={() => setRoute('Home')}
				>
					{'<'}
				</button>
				{sprites.map((spr) => (
					<Sprite key={spr} />
				))}
			</main>
			<footer className={style.footer} ref={loaderRef}>
				<p>Loading...</p>
			</footer>
		</>
	)
}

export default View
