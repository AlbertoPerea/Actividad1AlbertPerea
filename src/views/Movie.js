import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/StyleMovie.css';
import {MovieList} from "../components/MovieList";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
      fetch('https://658228df02f747c836791d73.mockapi.io/petclinic/products').then((res) => res.json())
      .then((res) => setMovies(res))
      .catch(error => console.log('No hay conexión a internet o hay un error'));
  }, []);

  console.log(movies.length);
  
  if(movies.length === 0){
    return (
        <div>
          <div>
            <h1>Por favor revise su conexión a Internet</h1>
          </div>
        </div>
    );
  }else{
    return (
        <div>
            <MovieList
                movies={movies}
            />
            <script src="scripts/moviesscripts.js"></script>
        </div>
    );
  }
}
