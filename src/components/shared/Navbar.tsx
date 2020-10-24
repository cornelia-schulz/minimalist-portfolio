import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

interface IProps {
  activeTab: number
  setActiveTab: (tab:number) => void
}

export const Navbar: React.FC<IProps> = ({activeTab, setActiveTab}) => {

  const isDesktopOrTablet = useMediaQuery({ query: '(min-device-width: 500px)'})
  const isMobile = useMediaQuery({ query: '(max-device-width: 499px)'})
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

  return (
    <nav className="container nav">
      <img alt="logo" src="/images/logo.svg" />
      {isMobile &&
        <img alt="menu" src="/images/icons/hamburger.svg" />
      }
      {isDesktopOrTablet &&
        <ul className="navigation">
          {navItems}
        </ul>
      }
    </nav>
  )
}
