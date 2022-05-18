import React, { useEffect, useState } from "react";
import MovieCard from "../layout/MovieCard";
import "./PopularMovies.css";

const PopularMovies = () => {
  const apiKEY = "api_key=96ba0f0b96c20f829684ff46c3dfd530";
  const apiURL = "https://api.themoviedb.org/3/movie/popular?";

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(`${apiURL + apiKEY}&language=es-ES`)
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <h2 className="popular-title">Ultimos Estrenos</h2>
      <div className="movie-container">
        {popularMovies.map((movie) => {
          return (
            <MovieCard key={movie.id} movie={movie} />
          );
        })}
      </div>
    </>
  );
};

export default PopularMovies;
