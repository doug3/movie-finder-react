import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SearchResults from './pages/SearchResults.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Contact from './pages/Contact.jsx'

const App = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Nav />
        <main className='flex-grow'>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
