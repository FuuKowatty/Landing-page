import { useState } from 'react';
import {CiMenuFries} from 'react-icons/ci'
import 'sass/style.scss';
import { Menu } from './Menu';



export function Navbar() {

  const [isVisible, setIsVisible] = useState(false)

  const handleIsVisible = () => {
    setIsVisible(prev => !prev)
  }

  return (
    <div className="navbar">
      Navbar
      <button className='icon__button' onClick={handleIsVisible}>
        <CiMenuFries />
      </button>  
      {isVisible && <Menu />}
    </div>
  )
}
