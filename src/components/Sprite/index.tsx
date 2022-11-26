import { useAtom } from 'jotai'
import { ImgHTMLAttributes, useMemo } from 'react'
import createSprite, { renderSprite } from '../../lib/sprite/index'
import { settingsAtom } from '../../lib/store/settings'
import templateAtom from '../../lib/store/template'
import style from './image.module.css'

function Sprite({
	alt = 'generated sprite',
	src,
}: ImgHTMLAttributes<HTMLImageElement>) {
	const [settings] = useAtom(settingsAtom)
	const [template] = useAtom(templateAtom)

	const data = useMemo(() => {
		const grid = createSprite(template, settings.mirrorX, settings.mirrorY)
		return renderSprite(grid, 1, [settings.bodyColor, settings.strokeColor])
	}, [settings, template])
	return <img src={src ?? data} alt={alt} className={style.image} />
}

export default Sprite
