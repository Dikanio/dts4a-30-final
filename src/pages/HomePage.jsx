import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as SwiperNavigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Box, Container, Grid, Typography } from "@mui/material";
import MovieList from "../components/MovieList";

// zustand
import useMovie, {
  selectNowPlaying,
  selectGetNowPlaying,
  selectPopular,
  selectGetPopular,
  selectTopRated,
  selectGetTopRated,
  selectUpComing,
  selectGetUpComing,
} from "../stores/Movie";

export default function HomePage() {
  const nowPlaying = useMovie(selectNowPlaying);
  const getNowPlaying = useMovie(selectGetNowPlaying);

  const popular = useMovie(selectPopular);
  const getPopular = useMovie(selectGetPopular);

  const upComing = useMovie(selectUpComing);
  const getUpComing = useMovie(selectGetUpComing);

  const topRated = useMovie(selectTopRated);
  const getTopRated = useMovie(selectGetTopRated);

  useEffect(() => {
    getNowPlaying();
    getPopular();
    getUpComing();
    getTopRated();
  }, []);
  return (
    <Container maxWidth="false">
      <Swiper navigation={true} modules={[SwiperNavigation]}>
        {nowPlaying.map((items, key) => {
          return (
            <SwiperSlide key={key}>
              <Box sx={{ background: "#040b16", height: "420px" }}>
                <Grid container>
                  <Grid item md={6} sx={{ padding: 6 }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "30px",
                      }}
                    >
                      {items.original_title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 2,
                        color: "white",
                        fontSize: "20px",
                      }}
                    >
                      {items.overview}
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    
                    <Box
                      component="img"
                      src={`https://image.tmdb.org/t/p/original${items.backdrop_path}`}
                      sx={{ width: "100%", height: "100%" }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <MovieList images={popular} section="Popular" />
      <MovieList images={upComing} section="Up Coming" />
      <MovieList images={topRated} section="Top Rated" type="poster" />
    </Container>
  );
}
