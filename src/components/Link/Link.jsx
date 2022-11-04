import './Link.css'

function Link({ text, href, bgColor }) {
	return (
		<a className='Link' href={href}>
			<span
				className='Link-icon'
				style={{ backgroundColor: `var(--${bgColor})` }}
			></span>
			{text}
		</a>
	)
}

export default Link
