import 'sass/style.scss'
import { pagesProps } from './Navbar'
import { Link } from 'react-scroll'

interface MenuProps {
  isClosing?: boolean
  pages: pagesProps[]
}

export function Menu({ isClosing, pages }: MenuProps) {

  return (
    <menu className={`menu ${isClosing ? 'closing' : ''}`}>
      {pages.map((page) => (
        <li key={page.id}>
          <Link
            to={page.id}
            spy={true}
            duration={500}
            offset={-100}
            className='reset__anchor'
            activeClass='active'
          >
            <p className='menu__item'>{page.page}</p>
          </Link>
        </li>
      ))}
    </menu>
  )
}
