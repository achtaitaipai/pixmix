/* eslint-disable consistent-return */
import { useAtom } from 'jotai'
import { useCallback, useEffect, useRef } from 'react'
import { bgColorAtom } from '../../lib/store/settings'
import Sprite from '../Sprite'
import style from './style.module.css'

interface PreviewSpriteProps {
	src: string
	close: () => void
}

function PreviewSprite({ src, close }: PreviewSpriteProps) {
	const wrapperRef = useRef<HTMLDivElement>(null)

	const download = useCallback(() => {
		const link = document.createElement('a')
		link.href = src
		link.download = `sprite.png`
		link.click()
	}, [src])

	useEffect(() => {
		const keyDown = (e: KeyboardEvent) => {
			if (e.code === 'Escape') close()
		}

		const clickout = (e: MouseEvent) => {
			const element = wrapperRef.current
			if (!element) return
			const rect = element.getBoundingClientRect()
			if (
				e.clientX < rect.left ||
				e.clientX > rect.left + rect.width ||
				e.clientY < rect.top ||
				e.clientY > rect.top + rect.height
			) {
				close()
			}
		}

		document.addEventListener('keydown', keyDown)
		document.addEventListener('click', clickout)

		return () => {
			document.removeEventListener('keydown', keyDown)
			document.removeEventListener('click', clickout)
		}
	}, [wrapperRef, close])
	const [bgColor] = useAtom(bgColorAtom)
	return (
		<div
			className={style.previewSprite}
			style={{ backgroundColor: bgColor }}
			ref={wrapperRef}
		>
			<Sprite src={src} />
			<div className={style.previewBtn}>
				<button type="button" onClick={download}>
					Download
				</button>
			</div>
		</div>
	)
}

export default PreviewSprite
