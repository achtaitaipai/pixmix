import { atom, useAtom } from 'jotai'

type Routes = 'Home' | 'View'

const routeAtom = atom<Routes>('Home')

export function useRoute() {
	const [route] = useAtom(routeAtom)
	return route
}

export function useSetRoute() {
	const [, setRoute] = useAtom(routeAtom)
	return setRoute
}
