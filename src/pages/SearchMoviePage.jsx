import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import { styled } from '@mui/material/styles';


import {
    Grid, Typography
} from '@mui/material';
import beast from "../assets/images/beast.jpg"
// zustand
import useMovie, {
    selectMovies,
    selectGetMovieByKeyword
} from "../stores/Movie";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     maxHeight: '200px',
//     color: theme.palette.text.secondary,
// }));
export default function SearchMoviePage() {

    const movieByKeyword = useMovie(selectGetMovieByKeyword);
    const movies = useMovie(selectMovies);
    let navigate = useNavigate();
    let { keyWord } = useParams();
    useEffect(() => {

        movieByKeyword(keyWord)

    }, []);
    const navigateToDetail = (movieId) => {
        // getByID(movieId);
        navigate(`/${movieId}`);
        window.location.reload(false);
    };
    return (
        <>
            <Grid container spacing={2} sx={{ display: "flex-container" }} p={2}>
                {movies.map((item) => (
                    <Grid item xs={3} key={item.title} sx={{
                        ":hover": {
                            cursor: "pointer",
                        },
                    }}>


                        <div style={{ position: "relative" }}>
                            <img
                                onClick={() => {
                                    navigateToDetail(item.id);
                                }}
                                src={(item.backdrop_path != null) ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : `${beast}`}
                                // srcSet={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                                alt={item.title}
                                loading={"lazy"}
                                width={'100%'}

                            />
                            <Typography gutterBottom variant="body2" sx={{color:"white"}} component="div">
                                {item.title}
                            </Typography>


                        </div>


                    </Grid>
                ))}


            </Grid>
        </>
    );
}
