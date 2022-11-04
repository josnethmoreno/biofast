import './Header.css'

import { profile } from '../../data'
import photo from '../../assets/photo.png'
import background from '../../assets/background.png'


function Header() {
	return (
		<header className='Header'>
			<div className='Header-data'>
				<img className='Header-photo' src={photo} alt='Profile img' />
				<h1 className='Header-name'>{profile.name}</h1>
				<h2 className='Header-role'>{profile.role}</h2>
			</div>
			<div className='Header-bg'>
				<img src={background} alt="Background header" />
			</div>
		</header>
	)
}

export default Header
