import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NoImage from "../../assets/no-image.jpg";
import styles from "./MovieCard.module.css";
import FavoritesContext from "../../context/FavoritesContext";

const MovieCard = ({ movie }) => {
  const FavoritesCtx = useContext(FavoritesContext);
  const favorites = FavoritesCtx.favorites;
  const posterPath = "https://image.tmdb.org/t/p/w500";

  const addMovieHandler = () => {
    FavoritesCtx.addMovieToFav(movie);
  };

  const movieIds = favorites.map((movie) => movie.id);

  return (
    <div className={styles.movieCard} key={movie.id}>
      <Link to={`/detail/${movie.id}`}>
        {movie.poster_path === null ? (
          <img
            src={NoImage}
            alt="no-available"
            className={styles.movieCardImg}
          />
        ) : (
          <img
            src={posterPath + movie.poster_path}
            alt={movie.title}
            className={styles.movieCardImg}
          />
        )}
      </Link>
      <div className={styles.movieCardInfo}>
        <div className={styles.movieCardInfo__title}>
          <h4 className={styles.infoTitle}>{movie.original_title}</h4>
          <button onClick={addMovieHandler}>
            {movieIds.includes(movie.id) ? (
              <i className="bx bxs-star yellow" />
            ) : (
              <i className="bx bx-star yellow" />
            )}
          </button>
        </div>
        <div className={styles.MovieCardDescription}>
          <div className={styles.movieCardInfo__year}>
            <i className="bx bx-calendar"></i>
            <p className={styles.date}>{movie.release_date}</p>
          </div>
          <div className={styles.movieCardInfo__lang}>
            <i className="bx bx-world"></i>
            <p className={styles.date}>{movie.original_language}</p>
          </div>
        </div>

        {/* <p className={styles.desc}>{movie.overview.substr(0, 80).trim()}...</p> */}
      </div>
    </div>
  );
};

export default MovieCard;

// https://api.themoviedb.org/3/movie/661791/translations?api_key=96ba0f0b96c20f829684ff46c3dfd530
