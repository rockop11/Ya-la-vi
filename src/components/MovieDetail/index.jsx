import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Images } from "../../GlobalStyles";

import { MovieBackground, MovieContainer, Description, Title } from "./styles";

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
    <MovieBackground
      style={{
        backgroundImage: `url(${imagePath + movieDetail.backdrop_path})`,
      }}
    >
      <MovieContainer>
        <Images
          small
          src={imagePath + movieDetail.poster_path}
          alt={movieDetail.title}
        />
        <Description>
          <div>
            <p>Duracion:{movieDetail.runtime}m</p>
            <p>
              <i className="bx bxs-star yellow" />
              {movieDetail.vote_average}
            </p>
          </div>
          <Title>{movieDetail.title}</Title>
          <p>{movieDetail.overview}</p>
          <Button>+ ADD LIST</Button>
        </Description>
      </MovieContainer>
    </MovieBackground>
  );
};

export default MovieDetail;
