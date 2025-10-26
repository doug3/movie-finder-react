import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  const [moviesArray, setMoviesArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [movieId, setMovieId] = useState(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home setSearchTerm={setSearchTerm} />} />
            <Route path="/search" element={<SearchResults setSearchTerm={setSearchTerm} setMoviesArray={setMoviesArray} setMovieId={setMovieId} />} />
            <Route path="/movie/:id" element={<MovieDetail movieId={movieId} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
