import Header from './components/Header/Header'
import Link from './components/Link/Link'

import { links } from './data'

import './App.css'

function App() {
	return (
		<div className='App'>
			<Header></Header>
			<div className='App-links'>
				{links.map((link, index) => (
					<Link
						text={link.text}
						href={link.href}
						bgColor={link.color}
						icon={link.icon}
						key={index}
					></Link>
				))}
			</div>
		</div>
	)
}

export default App
