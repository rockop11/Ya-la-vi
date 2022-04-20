import React, { useContext } from "react";
import MovieCard from "./layout/MovieCard";
import FavoritesContext from "../context/FavoritesContext";
import "./Favorites.css";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);
  const favorites = favoritesCtx.favorites;

  return (
    <div>
      <h2 className="fav-title">YA LAS VI: </h2>
      {
        // cambiar color del titulo en CSS
        !favorites.length ? <h3>Tu lista esta vacia...</h3> : ""
      }
      <div className="movie-container">
        {favorites.length > 0 && <p>Viste {favorites.length} peliculas</p>}
        {favorites.map((movie, i) => {
          return <MovieCard movie={movie} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Favorites;
