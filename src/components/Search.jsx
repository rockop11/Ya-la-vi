import React, { useState, useEffect, useRef } from "react";
import MovieCard from "./layout/MovieCard";
import "./Search.css";

const Search = () => {
  const apiKEY = "api_key=96ba0f0b96c20f829684ff46c3dfd530";

  const searchRef = useRef();

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchValue = () => {
    setSearchValue(searchRef.current.value);
  };

  const handleMovieSearch = (e) => {
    e.preventDefault();
    setSearchResults(searchValue);
  };

  useEffect(() => {
    if (!searchValue.length) {
      setSearchResults([]);
    } else {
      fetch(
        `https://api.themoviedb.org/3/search/movie?${apiKEY}&language=es-ES&query=${searchValue}`
      )
        .then((res) => res.json())
        .then((data) => setSearchResults(data.results));
    }
  }, [searchValue]);

  return (
    <>
      <h2>Busca una Pelicula</h2>
      <form onSubmit={handleMovieSearch}>
        <input
          type="text"
          onChange={handleSearchValue}
          ref={searchRef}
          placeholder="Search for movie title ..."
        />
        <i className="bx bx-search-alt"></i>
      </form>

      <div className="search-results">
        {searchValue.length > 0 && <h4>Resultado de la busqueda</h4>}
        <div className="movie-container">
          {searchResults.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
