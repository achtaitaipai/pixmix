import { create as randomSeed } from 'random-seed'
import { describe, expect, it } from 'vitest'
import shape from './shape'

describe('shape', () => {
	const mask = [
		'....',
		'.___',
		'._xx',
		'.._x',
		'...x',
		'___x',
		'.__x',
		'...x',
		'...x',
		'._xx',
		'__..',
	]
	const rand = randomSeed('0.321')
	const data = shape(mask, rand)
	const joined = data.join('')

	it('works', () => {
		expect(joined).toBe('......--...X.......X-.-..-.X...X.....-X..-..')
	})
	it('return differant result with different seed', () => {
		const rand2 = randomSeed('0')
		const data2 = shape(mask, rand2)
		const joined2 = data2.join('')
		expect(joined2).not.toBe('......--...X.......X-.-..-.X...X.....-X..-..')
	})
})
