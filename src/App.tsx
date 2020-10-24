import React, { useState } from 'react'
import './App.css'
import { Navbar } from './components/shared/Navbar'
import { Switch, Route } from 'react-router-dom'
import { Hero } from './components/homepage/Hero'
import { About } from './components/homepage/About'
import { Footer } from './components/shared/Footer'
import { Contact } from './components/homepage/Contact'

function App() {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </header>
        <Switch>
          <Route path="/">
            <Hero />
            <About />
            <Contact />
          </Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
