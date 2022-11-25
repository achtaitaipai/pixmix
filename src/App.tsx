import { match } from 'ts-pattern'
import View from './pages/View'
import Home from './pages/Index'
import Router from './Router'

function App() {
	const route = Router.useRoute(['Home', 'View'])
	return (
		<>
			{match(route)
				.with({ name: 'Home' }, () => <Home />)
				.with({ name: 'View' }, () => <View />)
				.with(undefined, () => <h1>404 - Page not found</h1>)
				.exhaustive()}
		</>
	)
}

export default App
