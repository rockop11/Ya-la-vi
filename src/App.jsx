import React from "react";
import { Route, Switch } from "react-router-dom";
import PopularMovies from "./components/PopularMovies";
import Search from "./components/Search";
import MovieDetail from "./components/layout/MovieDetail";
import Navbar from "./components/layout/Navbar";
import Favorites from "./components/Favorites";

//CONTEXT
import { FavoritesContextProvider } from './context/FavoritesContext'

const App = () => {
  return (
    <FavoritesContextProvider>
      <Navbar />
      <Switch>
        <Route path="/detail/:id">
          <MovieDetail />
        </Route>
        <Route path="/" exact>
          <Search />
          <PopularMovies />
        </Route>

        <Route path="/vistas" component={Favorites} />
      </Switch>
    </FavoritesContextProvider>
  );
};

export default App;
