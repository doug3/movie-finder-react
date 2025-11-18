import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieId, setMovieId] = useState(null);

  function handleSetSearchTerm(term) {
    setSearchTerm(term);
  }

  function handleSetMovieId(id) {
    setMovieId(id);
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen max-h-screen overflow-auto no-scrollbar bg-gray-100">
        <div className="sticky top-1 z-100">
          <Nav />
        </div>
        <main className="flex-grow flex align-center justify-center">
          <Routes>
            <Route
              path="/"
              element={<Home handleSetSearchTerm={handleSetSearchTerm} />}
            />
            <Route
              path="/search"
              element={
                <SearchResults
                  searchTerm={searchTerm}
                  handleSetSearchTerm={handleSetSearchTerm}
                  handleSetMovieId={handleSetMovieId}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <div className="sticky bottom-0 z-100">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
