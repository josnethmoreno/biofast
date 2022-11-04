import * as icon from 'react-icons/ri'

const profile = {
	name: 'Nathalie Caruso',
	role: 'Frontend Developer'
}

const links = [
	{ text: 'Portfolio', href: 'https://www.example.com', color: '#f0bdd1', icon: icon.RiHomeLine },
	{ text: 'Twitter', href: 'https://twitter.com', color: '#4fcbf8', icon: icon.RiTwitterLine },
	{ text: 'YouTube', href: 'https://youtube.com', color: '#ff4d4d', icon: icon.RiYoutubeLine },
	{ text: 'Github', href: 'https://github.com', color: '#333333', icon: icon.RiGithubLine },
	{ text: 'Instagram', href: 'https://instagram.com', color: '#f77636', icon: icon.RiInstagramLine },
    { text: 'LinkedIn', href: 'https://linkedin.com', color: '#0074b3', icon: icon.RiLinkedinLine},
    { text: 'Codepen', href: 'https://codepen.io', color: '#121212', icon: icon.RiCodepenLine},
    { text: 'Behance', href: 'https://behance.net', color: '#1a6aff', icon: icon.RiBehanceLine},
    { text: 'Medium', href: 'https://medium.com', color: '#000000', icon: icon.RiMediumLine},
]

const brand = 'Natalie Caruso © 2022'


export { links, profile, brand } 