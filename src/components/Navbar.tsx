import { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'
import 'sass/style.scss'
import { Menu } from './Menu'
import { useViewport } from 'hooks/useViewport'

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const { isMobile } = useViewport()

  const handleIsVisible = () => {
    setIsVisible((prev) => !prev)
  }

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      handleIsVisible()
      setIsClosing(false)
    }, 300)
  }

  return (
    <nav className='navbar'>
      <span className='navbar__logo'>
        <img src='https://www.svgrepo.com/show/502438/travel.svg' alt='logo' />
      </span>
      <div className='navbar__mobile'>
        {isVisible ? (
          <button
            className={`icon__button ${isClosing ? 'closing' : ''}`}
            onClick={handleClose}
            aria-label='close menu'
          >
            <AiOutlineClose />
          </button>
        ) : (
          <button className='icon__button' onClick={handleIsVisible} aria-label='open menu'>
            <CiMenuFries />
          </button>
        )}
      </div>
      {isMobile ? isVisible && <Menu isClosing={isClosing} /> : <Menu />}
    </nav>
  )
}
