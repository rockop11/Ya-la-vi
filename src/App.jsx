import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import PopularMovies from "./components/PopularMovies";
import Search from "./components/layout/Search";
import MovieDetail from "./components/MovieDetail";
import Navbar from "./components/layout/Navbar";
import Favorites from "./components/Favorites";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

// CONTEXT;
import { FavoritesContextProvider } from "./context/FavoritesContext";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <FavoritesContextProvider>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Navbar />
        <button onClick={toggleTheme}>
          {isDarkTheme ? (
            <span aria-label="Light mode" role="img">
              🌞
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              🌜
            </span>
          )}
        </button>

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
      </ThemeProvider>
    </FavoritesContextProvider>
  );
};

export default App;
