export default function mirror(
	initialData: string[],
	horizontal: boolean,
	vertical: boolean
) {
	if (horizontal && !vertical) return mirrorX(initialData)
	if (!horizontal && vertical) return mirrorY(initialData)
	if (horizontal && vertical) return mirrorX(mirrorY(initialData))
	return initialData
}

function mirrorX(initialData: string[]) {
	const data = [...initialData]
	const width = initialData[0].length
	return data.map((line) => {
		let mirroredLine = line
		for (let x = 0; x <= width; x += 1) {
			mirroredLine += line.charAt(width - x)
		}
		return mirroredLine
	})
}

function mirrorY(initialData: string[]) {
	const data = [...initialData]
	const height = data.length
	return data.reduce(
		(acc, _, i) => {
			return [...acc, data[height - i - 1]]
		},
		[...data]
	)
}
