import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const apiKEY = "api_key=96ba0f0b96c20f829684ff46c3dfd530";
  const imagePath = "https://image.tmdb.org/t/p/w500/";
  const apiURL = `https://api.themoviedb.org/3/movie/${id}?`;

  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    fetch(apiURL + apiKEY)
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
  }, []);

  return (
    <div>
      <h2>detalle de Pelicula: {movieDetail.title}</h2>
      <img
        src={imagePath + movieDetail.poster_path}
        alt={movieDetail.title}
        className="movie-card-img"
      />
      <br />
      <button><i className='bx bx-star'></i></button>
    </div>
  );
};

export default MovieDetail;