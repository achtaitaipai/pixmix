import { RandomSeed } from 'random-seed'
import PixelsValues from './PixelValues'

export default function shape(initialData: string[], rand: RandomSeed) {
	const data = [...initialData]
	return data.map((line) => {
		return line
			.split('')
			.map((c) => {
				if (c !== PixelsValues.RANDOMBODY && c !== PixelsValues.RANDOMBORDER)
					return c
				const choices =
					c === PixelsValues.RANDOMBODY
						? [PixelsValues.EMPTY, PixelsValues.BODY]
						: [PixelsValues.EMPTY, PixelsValues.BODY, PixelsValues.BORDER]
				const index = rand(choices.length)
				return choices[index]
			})
			.join('')
	})
}
