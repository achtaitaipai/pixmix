import { beforeEach, describe, expect, it } from 'vitest'
import mirror from './mirror'

describe('mirror', () => {
	const initialData = ['01234567', 'abcdefgh']
	const mirrorX = '0123456776543210abcdefghhgfedcba'
	const mirrorY = '01234567abcdefghabcdefgh01234567'
	let data = [...initialData]
	beforeEach(() => {
		data = [...initialData]
	})
	it('return the mirrorX version', () => {
		const result = mirror(data, true, false)
		expect(result.join('')).toBe(mirrorX)
	})
	it('return the mirrorY version', () => {
		const result = mirror(data, false, true)
		expect(result.join('')).toBe(mirrorY)
	})
})
