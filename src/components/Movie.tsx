import React, {useContext, useState} from 'react';
import {Box, Button, Chip, TextField} from "@mui/material";
import {MovieContext} from "../Context/MovieContext.tsx";
import {ThemeContext} from "../Context/ThemeContext.tsx";

const Movie = () => {
    const [movie, setMovie] = useState("");
    const onMovieInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMovie(e.target.value);
    }
    //context
    const {theme}=useContext(ThemeContext);
    const {movies, addMovie, deleteMovie} = useContext(MovieContext);

    return (
        <>
            <Box display="flex" justifyContent="center" my={5}>
                <TextField label="Your favorite movie ..." value={movie} variant="outlined"
                           onChange={onMovieInputChange} sx={{marginRight: "5px"}}/>
                <Button variant="contained" color="primary" onClick={() => {
                    addMovie(movie)
                    setMovie("")
                }}
                >
                    Add
                </Button>

            </Box>
            <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
                {movies.map(movie => (
                    <Chip key={movie.id} label={movie.title} clickable
                          sx={{fontSize: "1rem", padding: "30px 10px", margin: "5px"}}
                          color={theme}
                    onDelete={()=>deleteMovie(movie.id)}
                    />

                ))}
            </Box>
        </>
    );
};

export default Movie;
