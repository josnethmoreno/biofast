import './Footer.css'

import { brand } from '../../data'

function Footer() {
  return (
    <footer className='Footer'>
        <p className='Footer-brand'>{brand}</p>
    </footer>
  )
}

export default Footer