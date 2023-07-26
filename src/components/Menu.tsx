import 'sass/style.scss'
import { Link } from 'react-scroll'
import { SCROLL_DURATION, SCROLL_OFFSET } from 'utils/constants'

export const menuLinks = [
  {
    id: 'Home',
    page: 'Home',
  },
  {
    id: 'About',
    page: 'About Us',
  },
  {
    id: 'Opinions',
    page: 'Opinions',
  },
  {
    id: 'Explore',
    page: 'Explore',
  },
  {
    id: 'Reservation',
    page: 'Reservation',
  },
]

interface MenuProps {
  isClosing?: boolean
}

export function Menu({ isClosing }: MenuProps) {
  return (
    <menu className={`menu ${isClosing ? 'closing' : ''}`}>
      {menuLinks.map(({ id, page }) => (
        <li key={id}>
          <Link
            to={id}
            spy
            duration={SCROLL_DURATION}
            offset={SCROLL_OFFSET}
            className='reset__anchor'
            activeClass='active'
          >
            <p className='menu__item'>{page}</p>
          </Link>
        </li>
      ))}
    </menu>
  )
}
