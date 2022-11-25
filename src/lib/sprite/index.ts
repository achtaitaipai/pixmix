import { create as randomSeed } from 'random-seed'
import mirror from './mirror'
import render from './render'
import shape from './shape'
import stroke from './stroke'

export default function createSprite(
	grid: string[],
	mirrorX: boolean,
	mirrorY: boolean,
	seed = Math.random()
) {
	const rand = randomSeed(seed.toString())
	const shapeData = shape(grid, rand)
	const strokeData = stroke(shapeData)
	const mirrorData = mirror(strokeData, mirrorX, mirrorY)
	return mirrorData
	// return render(mirrorData, 5, [settings.bodyColor, settings.strokeColor])
}

export { render as renderSprite }
