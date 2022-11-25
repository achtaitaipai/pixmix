import { useEffect, useState } from 'react'

function useDebounce<T>(
	initialValue: T,
	callback: (arg: T) => void,
	delay: number
) {
	const [value, setValue] = useState(initialValue)

	useEffect(() => {
		const handler = setTimeout(() => {
			callback(value)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [value, callback, delay])

	return setValue
}

export default useDebounce
