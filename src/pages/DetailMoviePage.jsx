import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Container, Grid, Typography } from "@mui/material";
import MovieList from "../components/MovieList";
import DetailMovie from "../components/DetailMovie";
// zustand
import useMovie, {
  selectPopular,
  selectGetPopular,
  selectTopRated,
  selectGetTopRated,
  selectUpComing,
  selectGetUpComing,
  selectMovie,
  selectMovieById
} from "../stores/Movie";


export default function DetailMoviePage() {

  const navigate = useNavigate();

  const popular = useMovie(selectPopular);
  const getPopular = useMovie(selectGetPopular);

  const upComing = useMovie(selectUpComing);
  const getUpComing = useMovie(selectGetUpComing);

  const topRated = useMovie(selectTopRated);
  const getTopRated = useMovie(selectGetTopRated);

  const status_movie = true;
  const getByID = useMovie(selectMovieById);
  const movie = useMovie(selectMovie);
  let { movieId } = useParams();
  useEffect(() => {
    getPopular();
    getUpComing();
    getTopRated();

  }, []);
  return ((movie.length !== 0) ?
    <Container maxWidth="false">
      <DetailMovie movie={movie} />
      <MovieList images={popular} section="Popular" />
      <MovieList images={upComing} section="Up Coming" />
      <MovieList images={topRated} section="Top Rated" type="poster" />
    </Container>
    :
    <>
      <Container maxWidth="false" >
        <Typography variant="h4" sx={{ color: "white" }} justifyContent={'center'}>Movie Not Found.</Typography>
        <MovieList images={popular} section="Popular" />
        <MovieList images={upComing} section="Up Coming" />
        <MovieList images={topRated} section="Top Rated" type="poster" />
      </Container>
    </>
  );
}
