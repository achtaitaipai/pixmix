import PixelsValues from './PixelValues'

export type HslValue = [number, number, number]

export default function render(
	grid: string[],
	pixelScale: number,
	colors: [HslValue, HslValue]
) {
	const canvas = document.createElement('canvas')
	const width = grid[0].length
	const height = grid.length
	canvas.width = width * pixelScale
	canvas.height = height * pixelScale
	const ctx = canvas.getContext('2d')
	if (!ctx) throw new Error('canvas context is not defined')
	for (let y = 0; y < height; y += 1) {
		for (let x = 0; x < width; x += 1) {
			const value = grid[y].charAt(x)
			if (value === PixelsValues.EMPTY) ctx.fillStyle = 'transparent'
			if (value === PixelsValues.BODY) ctx.fillStyle = getColor(colors[0])
			if (value === PixelsValues.BORDER) ctx.fillStyle = getColor(colors[1])
			ctx.fillRect(x * pixelScale, y * pixelScale, pixelScale, pixelScale)
		}
	}
	return canvas.toDataURL()
}

function getColor(value: HslValue) {
	return `hsl(${value[0]},${value[1]}%,${value[2]}%)`
}
