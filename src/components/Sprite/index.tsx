import { useAtom } from 'jotai'
import { ImgHTMLAttributes, useMemo } from 'react'
import createSprite, { renderSprite } from '../../lib/sprite/index'
import { settingsAtom } from '../../lib/store/settings'
import templateAtom from '../../lib/store/template'
import style from './image.module.css'

function Sprite({
	alt = 'generated sprite',
}: ImgHTMLAttributes<HTMLImageElement>) {
	const [settings] = useAtom(settingsAtom)
	const [template] = useAtom(templateAtom)
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
