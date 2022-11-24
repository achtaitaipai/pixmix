import { useAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import cssVariables from '../../../helpers/cssVariables'
import templateAtom, {
	heightAtom,
	setPixelAtom,
	widthAtom,
} from '../../../lib/store/template'
import style from './style.module.css'
import SizeEditor from './SizeEditor'

interface CanvasProps {
	cursorValue: string
	colors: Record<string, string>
}

function Canvas({ cursorValue, colors }: CanvasProps) {
	const [template] = useAtom(templateAtom)
	const [, setPixel] = useAtom(setPixelAtom)
	const [width] = useAtom(widthAtom)
	const [height] = useAtom(heightAtom)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	function handleMove(e: React.PointerEvent<HTMLCanvasElement>) {
		const rect = canvasRef.current?.getBoundingClientRect()
		if (!rect) return
		const pixelSize = rect.width / Math.max(width, height)
		const maxPixel = rect.width / pixelSize
		const yOffset = (maxPixel - height) * 0.5 * pixelSize
		const xOffset = (maxPixel - width) * 0.5 * pixelSize
		const x = Math.floor((e.clientX - rect.left - xOffset) / pixelSize)
		const y = Math.floor((e.clientY - rect.top - yOffset) / pixelSize)
		if (x < 0 || x >= width || y < 0 || y >= height) return
		if (e.pressure > 0) {
			setPixel({ x, y, value: cursorValue })
		}
	}

	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas?.getContext('2d')
		if (!ctx) return
		for (let y = 0; y < height; y += 1) {
			for (let x = 0; x < width; x += 1) {
				const value = template[y].charAt(x)
				const color = colors[value] ?? 'white'
				ctx.fillStyle = color
				ctx.fillRect(x, y, 1, 1)
			}
		}
	}, [template, height, width, colors])
	return (
		<div
			className={style.wrapper}
			style={cssVariables({
				'--cols': width.toString(),
				'--rows': height.toString(),
			})}
		>
			<SizeEditor />
			<canvas
				className={style.canvas}
				ref={canvasRef}
				width={width}
				height={height}
				onPointerMove={handleMove}
			/>
		</div>
	)
}

export default Canvas
