import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.tsx";
import ProgressContextProvider from "./Context/ProgressContext.tsx";
import ThemeContextProvider from "./Context/ThemeContext.tsx";

import ToggleThemeBtn from "./components/ToggleThemeBtn.tsx";
import MovieContextProvider, {MovieContext} from "./Context/MovieContext.tsx";
import Movie from "./components/Movie.tsx";
import AuthContextProvider from "./Context/AuthContext.tsx";
import {Grid} from "@mui/material";
import TopMovies from "./components/TopMovies.tsx";
import TopMovieContextProvider from "./Context/TopMovieContext.tsx";


function App() {
    return (
        <div>
            <TopMovieContextProvider>

                <AuthContextProvider>
                    <MovieContextProvider>
                        <ThemeContextProvider>
                            <ProgressContextProvider>
                                <Navbar/>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <TopMovies/>
                                    </Grid>
                                    <Grid xs={8}>
                                        <Movie/>

                                    </Grid>
                                </Grid>
                                <ToggleThemeBtn/>
                            </ProgressContextProvider>
                        </ThemeContextProvider>
                    </MovieContextProvider>
                </AuthContextProvider>
            </TopMovieContextProvider>
        </div>
    )
}

export default App;