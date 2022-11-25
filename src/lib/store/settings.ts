import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const mirrorXAtom = atomWithStorage('mirrorX', true)
export const mirrorYAtom = atomWithStorage('mirrorY', false)
export const bodyColorAtom = atomWithStorage('bodyColor', '#ffffff')
export const strokeColorAtom = atomWithStorage('strokeColor', '#000000')
export const bgColorAtom = atomWithStorage('bgColor', '#ffffff')

export const settingsAtom = atom((get) => ({
	mirrorX: get(mirrorXAtom),
	mirrorY: get(mirrorYAtom),
	bodyColor: hexToHSL(get(bodyColorAtom)),
	strokeColor: hexToHSL(get(strokeColorAtom)),
}))

function hexToHSL(H: string) {
	// Convert hex to RGB first
	let r: number | string = 0
	let g: number | string = 0
	let b: number | string = 0
	if (H.length === 4) {
		r = `0x${H[1]}${H[1]}`
		g = `0x${H[2]}${H[2]}`
		b = `0x${H[3]}${H[3]}`
	} else if (H.length === 7) {
		r = `0x${H[1]}${H[2]}`
		g = `0x${H[3]}${H[4]}`
		b = `0x${H[5]}${H[6]}`
	}
	// Then to HSL
	r = Number(r) / 255
	g = Number(g) / 255
	b = Number(b) / 255
	const cmin = Math.min(r, g, b)
	const cmax = Math.max(r, g, b)
	const delta = cmax - cmin
	let h = 0
	let s = 0
	let l = 0

	if (delta === 0) h = 0
	else if (cmax === r) h = ((g - b) / delta) % 6
	else if (cmax === g) h = (b - r) / delta + 2
	else h = (r - g) / delta + 4

	h = Math.round(h * 60)

	if (h < 0) h += 360

	l = (cmax + cmin) / 2
	s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
	s = +(s * 100).toFixed(1)
	l = +(l * 100).toFixed(1)

	return [h, s, l] as [number, number, number]
}
