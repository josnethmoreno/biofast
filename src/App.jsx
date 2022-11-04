import Header from './components/Header/Header'
import Link from './components/Link/Link'

import links from './data'

import './App.css'

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Header></Header>
				<div className='App-links'>
					{links.map(link => (
						<Link text={link.text} href={link.href} bgColor={link.color} icon={link.icon}></Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default App
