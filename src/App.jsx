import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SearchResults from './pages/SearchResults.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
