import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import MenuData from './MenuData'
import './Navigation.css'

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)
  return (
    <aside>
      <div className='navbar'>
        <div className='navbar-toggle'>
          <Link to='#' className='menu-bar'>
            <FaBars onClick={toggleMenu} />
          </Link>
        </div>
        <nav className={showMenu ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-item' onClick={toggleMenu}>
            <li>
              <div className='navbar-toggle'>
                <Link to='#' className='menu-bar'>
                  <FaWindowClose />
                </Link>
              </div>
            </li>
            {MenuData.map((menu, index) => {
              return (
                <li className='menu-text' key={index}>
                  <Link to={menu.path}>
                    {menu.icon}
                    <span>{menu.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Navigation
