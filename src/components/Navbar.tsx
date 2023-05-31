import { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'
import 'sass/style.scss'
import { Menu } from './Menu'

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

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
    <div className='navbar'>
      Navbar
      {isVisible ? (
            <button className={`icon__button ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
                <AiOutlineClose />
            </button>
      ) : (
        <button className='icon__button' onClick={handleIsVisible}>
          <CiMenuFries />
        </button>
      )}
      {isVisible && <Menu isClosing={isClosing}/>}
    </div>
  )
}
