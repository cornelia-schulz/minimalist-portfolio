import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

interface IProps {
  activeTab: number
  setActiveTab: (tab:number) => void
}

export const Navbar: React.FC<IProps> = ({activeTab, setActiveTab}) => {

  const isDesktopOrTablet = useMediaQuery({ query: '(min-device-width: 500px)'})
  const isMobile = useMediaQuery({ query: '(max-device-width: 499px)'})
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [menuImage, setMenuImage] = useState('/images/icons/hamburger.svg')
  const menuItems = [
    {
      link:'/',
      name: 'HOME'
    },
    {
      link:'/portfolio',
      name: 'PORTFOLIO'
    }, {
      link: '/contact',
      name: 'CONTACT ME'
    }
  ]
  const navItems = menuItems.map((item, index) => {
    if (index === activeTab) return <li key={index}><Link className="active" to={item.link}>{item.name}</Link></li>
    else return <li key={index}><Link to={item.link}>{item.name}</Link></li>
  })

  const toggleMenu = () => {
    const mobileMenu = document.getElementById('mobile-navigation')
    console.log(mobileMenu)
    if (isMenuOpen) {
      mobileMenu?.classList.remove('flex')
      mobileMenu?.classList.add('hidden')
      setMenuImage('/images/icons/hamburger.svg')
      setMenuOpen(false)
    } else {
      mobileMenu?.classList.remove('hidden')
      mobileMenu?.classList.add('flex')
      setMenuImage('/images/icons/close.svg')
      setMenuOpen(true)
    }
  }

  return (
    <nav className="container nav">
      <img alt="logo" src="/images/logo.svg" />
      {isMobile &&
        <div className="mobile-nav">
          <img alt="menu" src={menuImage} onClick={toggleMenu} />
          <ul id="mobile-navigation" className="mobile-navigation hidden">
            {navItems}
          </ul>
        </div>
      }
      {isDesktopOrTablet &&
        <ul className="navigation">
          {navItems}
        </ul>
      }
    </nav>
  )
}
