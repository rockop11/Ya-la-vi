import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieDetail.module.css";

const MovieDetail = () => {
  const { id } = useParams();
  const apiKEY = "api_key=96ba0f0b96c20f829684ff46c3dfd530";
  const imagePath = "https://image.tmdb.org/t/p/w500/";
  const apiURL = `https://api.themoviedb.org/3/movie/${id}?`;

  const [movieDetail, setMovieDetail] = useState({});
  console.log(movieDetail);

  useEffect(() => {
    fetch(apiURL + apiKEY)
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${imagePath + movieDetail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      {/* <h2 className={styles.title}>detalle de Pelicula: </h2> */}
      <div className={styles.movieDetail}>
        <img
          src={imagePath + movieDetail.poster_path}
          alt={movieDetail.title}
          className="movie-card-img"
        />
        <div className={styles.movieDetail__description}>
          <div className={styles.movieDetail__description__detail}>
            <p>Duracion:{movieDetail.runtime}m</p>
            <p>
              <i className="bx bxs-star yellow" />
              {movieDetail.vote_average}
            </p>
          </div>
          <div className={styles.movieDetail__title}>{movieDetail.title}</div>
          <p className={styles.desc}>{movieDetail.overview}</p>
          <div className={styles.buttons}>
            <button className={styles.addButton}>+ ADD LIST</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
