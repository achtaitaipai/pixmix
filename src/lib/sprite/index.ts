import { create as randomSeed } from 'random-seed'
import mirror from './mirror'
import render, { HslValue } from './render'
import shape from './shape'
import stroke from './stroke'

interface SpriteOptions {
	mirrorX: boolean
	mirrorY: boolean
	bodyColor: HslValue
	strokeColor: HslValue
	seed?: number
}

const defaultOptions: SpriteOptions = {
	mirrorX: true,
	mirrorY: false,
	strokeColor: [211, 10, 15],
	bodyColor: [211, 20, 43],
}

export default function createSprite(
	grid: string[],
	options?: Partial<SpriteOptions>
) {
	const settings = { ...defaultOptions, ...options }
	const seed = settings.seed ?? Math.random()
	const rand = randomSeed(seed.toString())
	const shapeData = shape(grid, rand)
	const strokeData = stroke(shapeData)
	const mirrorData = mirror(strokeData, settings.mirrorX, settings.mirrorY)
	return render(mirrorData, 5, [settings.bodyColor, settings.strokeColor])
}
