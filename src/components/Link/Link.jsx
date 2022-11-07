import './Link.css'

import Icon from '../Icon/Icon'

function Link({ text, href, bgColor, icon }) {
	return (
		<a className='Link' href={href}>
			<span className='Link-icon' style={{ backgroundColor: bgColor }}>
				<Icon icon={icon}></Icon>
			</span>
			{text}
		</a>
	)
}

export default Link
