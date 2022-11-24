import PixelsValues from './PixelValues'

export default function stroke(initialData: string[]) {
	const data = [...initialData]
	return data.map((line, y) =>
		line
			.split('')
			.map((c, x) =>
				hasEmptyNeighBoor(x, y, initialData) ? PixelsValues.BORDER : c
			)
			.join('')
	)
}

function hasEmptyNeighBoor(x: number, y: number, data: string[]) {
	if (data[y].charAt(x) !== PixelsValues.EMPTY) return false
	if (x > 0 && data[y].charAt(x - 1) === PixelsValues.BODY) return true
	if (x < data[y].length - 1 && data[y].charAt(x + 1) === PixelsValues.BODY)
		return true
	if (y > 0 && data[y - 1].charAt(x) === PixelsValues.BODY) return true
	if (y < data.length - 1 && data[y + 1].charAt(x) === PixelsValues.BODY)
		return true
	return false
}
// supprimer les bordures qui touchent 3 vides et 0 body
