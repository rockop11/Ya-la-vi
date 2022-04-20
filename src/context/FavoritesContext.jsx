import { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext({
  favorites: [],
  addMovieToFav: (movie) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favoritesList, setFavoritesList] = useState([]);


  const addMovieToFavHandler = (movie) => {
    //filtro los id del estado, y devuelvo un [] nuevo solo de IDS
    let moviesIDs = favoritesList.map((movie) => movie.id);
    // condiciono por si ya se encuentra en el array previo, no se agrega
    if (!moviesIDs.includes(movie.id)) {
      // seteo nuevo estado sin repetir la movie
      setFavoritesList((prevFavoriteList) => {
        return prevFavoriteList.concat(movie);
      });
    }
    if (moviesIDs.includes(movie.id)) {
      setFavoritesList((prevFavoriteList) => {
        return prevFavoriteList.filter(
          (prevFavoriteList) => prevFavoriteList.id !== movie.id
        );
      });
    }
  };

  const context = {
    favorites: favoritesList,
    addMovieToFav: addMovieToFavHandler,
  };

  useEffect(() => {
    const moviesList = localStorage.getItem("movies-list");
    if (moviesList) {
      setFavoritesList(JSON.parse(moviesList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("movies-list", JSON.stringify(favoritesList));
  });

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
