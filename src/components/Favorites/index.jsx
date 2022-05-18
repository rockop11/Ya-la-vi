import React, { useContext } from "react";
import MovieCard from "../layout/MovieCard";
import FavoritesContext from "../../context/FavoritesContext";
import { MainTitle, MovieCounter } from "./styles";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);
  const favorites = favoritesCtx.favorites;

  return (
    <div>
      <MainTitle>YA LAS VI :</MainTitle>
      {
        // cambiar color del titulo en CSS
        !favorites.length ? <h3>Tu lista esta vacia...</h3> : ""
      }
      {favorites.length > 0 && (
        <MovieCounter>Viste {favorites.length} peliculas</MovieCounter>
      )}
      <div className="movie-container">
        {favorites.map((movie, i) => {
          return <MovieCard movie={movie} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Favorites;
