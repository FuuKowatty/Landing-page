import 'sass/style.scss'
import { Link } from 'react-scroll'

export function Header() {
  return (
    <header className='header' id='Home'>
      <h1 className='header__text'>Travel around the world!</h1>

      <Link
        to={'reservation'}
        smooth={true}
        spy={true}
        duration={500}
        offset={-100}
        className='header__button reset__anchor breathing__animation'
      >
        Sign Up
      </Link>

      <a href='http://www.freepik.com' className='header_img_author' target='_blank'>
        Header Designed by gstudioimagen / Freepik
      </a>
    </header>
  )
}
