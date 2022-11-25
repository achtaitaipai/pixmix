import { useAtom } from 'jotai'
import { ImgHTMLAttributes, useMemo } from 'react'
import createSprite, { renderSprite } from '../../lib/sprite/index'
import { settingsAtom } from '../../lib/store/settings'
import style from './image.module.css'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	template: string[]
}

function Sprite({ template, alt = 'generated sprite' }: ImageProps) {
	const [settings] = useAtom(settingsAtom)
	const grid = useMemo(
		() => createSprite(template, settings.mirrorX, settings.mirrorY),
		[template, settings.mirrorX, settings.mirrorY]
	)
	const data = useMemo(
		() => renderSprite(grid, 1, [settings.bodyColor, settings.strokeColor]),
		[grid, settings.bodyColor, settings.strokeColor]
	)
	return <img src={data} alt={alt} className={style.image} />
}

export default Sprite
