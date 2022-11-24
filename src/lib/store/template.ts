import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import PixelsValues from '../sprite/PixelValues'

const templateAtom = atomWithStorage('template', [
	'.X_-x...',
	'........',
	'........',
	'........',
	'........',
	'........',
	'........',
	'........',
])

export const widthAtom = atom((get) => get(templateAtom)[0].length)
export const heightAtom = atom((get) => get(templateAtom).length)

export const insertColumnAtom = atom(null, (get, set, x: number) =>
	set(
		templateAtom,
		get(templateAtom).map((line) =>
			x === line.length
				? line + PixelsValues.EMPTY
				: line.slice(0, x) + PixelsValues.EMPTY + line.slice(x)
		)
	)
)

export const removeColumnAtom = atom(null, (get, set, x: number) => {
	if (get(templateAtom)[0].length <= 1) return
	set(
		templateAtom,
		get(templateAtom).map((line) => line.slice(0, x) + line.slice(x + 1))
	)
})

export const insertRowAtom = atom(null, (get, set, y: number) => {
	const clone = [...get(templateAtom)]
	const row = Array.from(
		Array(clone[0]?.length ?? 0),
		() => PixelsValues.EMPTY
	).join('')
	set(templateAtom, [...clone.slice(0, y), row, ...clone.slice(y)])
})

export const removeRowAtom = atom(null, (get, set, y: number) => {
	if (get(templateAtom).length <= 1) return
	set(templateAtom, [
		...get(templateAtom).slice(0, y),
		...get(templateAtom).slice(y + 1),
	])
})

interface SetPixelPayload {
	x: number
	y: number
	value: string
}

export const setPixelAtom = atom(
	null,
	(get, set, { x, y, value }: SetPixelPayload) => {
		if (x < 0 || x >= get(widthAtom) || y < 0 || y >= get(heightAtom)) return
		const clone = [...get(templateAtom)]
		const line = clone[y].slice(0, x) + value + clone[y].slice(x + 1)
		set(templateAtom, [...clone.slice(0, y), line, ...clone.slice(y + 1)])
	}
)

export default templateAtom
