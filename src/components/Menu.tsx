import 'sass/style.scss'
import { pagesProps } from './Navbar';

interface MenuProps  { 
  isClosing?: boolean;
  pages: pagesProps[];
}

export function Menu({ isClosing, pages } : MenuProps) {
  return (
    <div className={`menu ${isClosing ? 'closing' : ''}`}>
      {pages.map((page) => (
        <a href={`#${page.id}`} key={page.id} className='reset__anchor' >
          <p className='menu__item' >
            {page.page}
          </p>
        </a>
      ))}
    </div>
  )
}
