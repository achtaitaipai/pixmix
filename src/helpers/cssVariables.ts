import { CSSProperties } from 'react'

type CSSVariables = { [key: string]: string }

function cssVariables(vars: CSSVariables) {
	return Object.entries(vars).reduce<CSSProperties>((acc, el) => {
		const style = cssVariable(...el)
		return { ...acc, ...style }
	}, {})
}

function cssVariable(key: string, value: string) {
	return { [key]: value } as CSSProperties
}

export default cssVariables
