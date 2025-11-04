import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = ({ movieId }) => {
  const { id } = useParams();
  console.log("MovieDetail received movieId:", id);
  return (
    <div>
      <h1>Movie Detail Page</h1>
      <p>Movie ID: {movieId || id}</p>
    </div>
  )
}

export default MovieDetail