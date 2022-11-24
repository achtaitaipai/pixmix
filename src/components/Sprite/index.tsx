import { useAtom } from 'jotai'
import { ImgHTMLAttributes } from 'react'
import createSprite from '../../lib/sprite/index'
import { bgColorAtom, settingsAtom } from '../../lib/store/settings'
import style from './image.module.css'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	template: string[]
}

function Sprite({ template, alt = 'generated sprite' }: ImageProps) {
	const [settings] = useAtom(settingsAtom)
	return (
		<img
			src={createSprite(template, settings)}
			alt={alt}
			className={style.image}
		/>
	)
}

export default Sprite
