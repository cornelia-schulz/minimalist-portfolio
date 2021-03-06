import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

interface IProps {
  activeTab: number
  setActiveTab: (tab:number) => void
}

export const Navbar: React.FC<IProps> = ({activeTab, setActiveTab}) => {

  const history = useHistory()
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
    if (index === activeTab) return <li key={index}><Link className="active" to={item.link} onClick={() => handleClick(index)}>{item.name}</Link></li>
    else return <li key={index}><Link to={item.link} onClick={() => handleClick(index)}>{item.name}</Link></li>
  })

  const handleClick = (tab: number) => {
    setActiveTab(tab)
    if (isMobile) {
      toggleMenu()
    }
    if (tab === 0) history.push('/')
    else if (tab === 1) history.push('/portfolio')
    else if (tab === 2) history.push('/contact')
  }

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
