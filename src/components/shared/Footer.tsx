import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../icons/logo.svg'
import { ReactComponent as Twitter } from '../../icons/twitter.svg'
import { ReactComponent as LinkedIn } from '../../icons/linkedin.svg'
import { ReactComponent as Github } from '../../icons/github.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <Logo />
          <ul className="bottom-nav">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/portfolio">PORTFOLIO</Link></li>
            <li><Link to="/contact">CONTACT ME</Link></li>
          </ul>
        </div>
        <ul className="social-icons">
          <li><Link to=""><Github /></Link></li>
          <li><Link to=""><Twitter /></Link></li>
          <li><Link to=""><LinkedIn /></Link></li>
        </ul>
      </div>
    </footer>
  )
}
