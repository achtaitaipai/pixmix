import { match } from 'ts-pattern'
import { useRoute } from './lib/store/route'
import Home from './pages/Home'
import View from './pages/View'

function App() {
	const route = useRoute()
	return (
		<>
			{match(route)
				.with('Home', () => <Home />)
				.with('View', () => <View />)
				.exhaustive()}
		</>
	)
}

export default App
