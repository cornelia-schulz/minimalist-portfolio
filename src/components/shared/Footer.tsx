import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../icons/logo.svg'
import { ReactComponent as Twitter } from '../../icons/twitter.svg'
import { ReactComponent as LinkedIn } from '../../icons/linkedin.svg'
import { ReactComponent as Github } from '../../icons/github.svg'

interface IProps {
  setActiveTab: (tab:number) => void
}

export const Footer: React.FC<IProps> = ({setActiveTab}) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <Logo />
          <ul className="bottom-nav">
            <li><Link to="/" onClick={() => setActiveTab(0)}>HOME</Link></li>
            <li><Link to="/portfolio" onClick={() => setActiveTab(1)}>PORTFOLIO</Link></li>
            <li><Link to="/contact" onClick={() => setActiveTab(2)}>CONTACT ME</Link></li>
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
