//import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/StyleMovie.css';
import {MovieList} from "../components/MovieList";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
      fetch('https://658228df02f747c836791d73.mockapi.io/petclinic/products').then((res) => res.json())
      .then((res) => setMovies(res));
  }, []);
  return (
      <div>
          <MovieList
              movies={movies}
          />
      </div>
  );
}
