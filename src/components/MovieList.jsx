import { useNavigate } from "react-router-dom";
import React,{useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as SwiperNavigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import useMovie, {
  selectMovie,
  selectMovieById
} from "../stores/Movie";
export default function MovieList({ images, section, type }) {
  let navigate = useNavigate();

  if (!type) {
    type = "image";
  }

  const getByID = useMovie(selectMovieById);
  const movie = useMovie(selectMovie);

  const navigateToDetail = (movieId) => {
    // getByID(movieId);
    navigate(`/${movieId}`);
    window.location.reload(false);
  };
  
  return (
    <Box sx={{ paddingTop: 2, paddingBottom: 2 }}>
      <Typography sx={{ color: "#E5E5E5", fontWeight: 500, fontSize: "26px" }}>
        {section}
      </Typography>
      <Swiper
        navigation={true}
        modules={[SwiperNavigation]}
        slidesPerView={5}
        spaceBetween={30}
      >
        {images.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <Box
                onClick={() => {
                  navigateToDetail(item.id);
                }}
                component="img"
                src={
                  type == "image"
                    ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
                    : `https://image.tmdb.org/t/p/original${item.poster_path}`
                }
                sx={{
                  width: "285px",
                  height: type === "image" ? "160px" : "575px",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
