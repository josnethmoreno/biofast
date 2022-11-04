import './Header.css'

import profile from '../../assets/profile.png'

function Header() {
	return (
		<header className='Header'>
			<img src={profile} alt='Profile img' />
			<h1>Nathalie Hawlitschek</h1>
			<h2>Frontend Developer</h2>
		</header>
	)
}

export default Header
