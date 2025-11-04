import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [movieFullDetails, setMovieFullDetails] = useState([]);

  async function fetchMovieDetails(id) {
    const { data } = await axios.get(`${import.meta.env.VITE_DB_API_ID}${id}`)
    setMovieFullDetails(data);
    console.log("Fetched movie details:", data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovieDetails(id);
  }, []);
  

  return (
    <div>
      {!loading ? (
        <>
        <h1>{movieFullDetails?.Title || 'Title not available'}</h1>
        <p>Movie ID: {id}</p>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default MovieDetail