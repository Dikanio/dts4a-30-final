import create from "zustand";
import axios from "../utils/axios";

const sliceMovie = (set) => ({
  movie: {},
  movies: [],
  nowPlaying: [],
  popular: [],
  upComing: [],
  topRated: [],

  getMovie: async (movieId) => {
    const { data } = await axios.get(`/movie/${movieId}`);

    set({ movie: data });
  },

  getMovieByKeyword: async (keyword) => {
    const { data } = await axios.get(`/search/movie/${keyword}`);

    set({ movies: data.results });
  },

  getNowPlaying: async () => {
    const { data } = await axios.get("/movie/now_playing");

    set({ nowPlaying: data.results });
  },

  getPopular: async () => {
    const { data } = await axios.get("/movie/popular");

    set({ popular: data.results });
  },

  getUpComing: async () => {
    const { data } = await axios.get("/movie/upcoming");

    set({ upComing: data.results });
  },

  getTopRated: async () => {
    const { data } = await axios.get("/movie/top_rated");

    set({ topRated: data.results });
  },
});

const useMovie = create(sliceMovie);

export const selectMovie = (state) => state.movie;
export const selectMovies = (state) => state.movies;

export const selectNowPlaying = (state) => state.nowPlaying;
export const selectGetNowPlaying = (state) => state.getNowPlaying;

export const selectUpComing = (state) => state.upComing;
export const selectGetUpComing = (state) => state.getUpComing;

export const selectPopular = (state) => state.popular;
export const selectGetPopular = (state) => state.getPopular;

export const selectTopRated = (state) => state.topRated;
export const selectGetTopRated = (state) => state.getTopRated;

export const selectGetMovieByKeyword = (state) => state.getMovieByKeyword;

export const selectMovieById = (state) =>state.getMovie;

export default useMovie;
