import React, { useEffect, useState } from 'react'
import './styles/App.scss'
import './styles/Homepage.scss'
import './styles/Contact.scss'
import './styles/Portfolio.scss'
import { Navbar } from './components/shared/Navbar'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Hero } from './components/homepage/Hero'
import { About } from './components/homepage/About'
import { Footer } from './components/shared/Footer'
import { Contact } from './components/homepage/Contact'
import { ContactMe } from './components/contact/ContactMe'
import { ContactForm } from './components/contact/ContactForm'
import { PortfolioItems } from './components/portfolio/PortfolioItems'

function App() {

  const [activeTab, setActiveTab] = useState(0)
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/contact') setActiveTab(2)
    else if (location.pathname === '/portfolio') setActiveTab(1)
  }, [location])

  
  return (
    <div className="App">
      <div className="app-container">
      <header className="App-header">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </header>
        <Switch>
          <Route path="/contact">
            <ContactMe />
            <ContactForm />
          </Route>
          <Route path="/portfolio">
            <PortfolioItems />
            <Contact setActiveTab={setActiveTab} />
          </Route>
          <Route path="/">
            <Hero />
            <About setActiveTab={setActiveTab} />
            <Contact setActiveTab={setActiveTab} />
          </Route>
        </Switch>
      </div>
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
