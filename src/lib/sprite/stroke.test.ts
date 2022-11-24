import { describe, expect, it } from 'vitest'
import stroke from './stroke'

describe('stroke', () => {
	const data = [
		'....',
		'....',
		'.-..',
		'..-.',
		'...X',
		'...X',
		'.--X',
		'....',
		'...X',
		'.-X.',
		'--..',
	]

	it('applies edge to any cell that is not empty ans is surrounded by empty cell', () => {
		const stroked = stroke(data).join('')
		expect(stroked).toBe('.....X..X-X..X-X..XX.XXXX--X.XX..X.XX-X.--X.')
	})
})
