import Header from './components/Header/Header'
import Link from './components/Link/Link'

import './App.css'

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Header></Header>
				<div className='App-links'>
					<Link text='Portfolio' bgColor='accent'></Link>
					<Link text='Twitter' bgColor='twitter'></Link>
					<Link text='YouTube' bgColor='youtube'></Link>
					<Link text='Github' bgColor='github'></Link>
					<Link text='Instagram' bgColor='instagram'></Link>
				</div>
			</div>
		</div>
	)
}

export default App
