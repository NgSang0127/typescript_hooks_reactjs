import React, {useContext, useEffect} from 'react';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText
} from "@mui/material";
import {TopMovieContext} from "../Context/TopMovieContext.tsx";

const TopMovies = () => {
    //context
    const {topMovies, getTopMovies,toggleWatch} = useContext(TopMovieContext);
    useEffect(() => {
        getTopMovies();

    }, []);
    console.log(topMovies);
    return (
        <Box mt={1} ml={1}>
            <Card raised>
                <CardHeader title="Top ten movies of all  the times" sx={{paddingBottom: "0"}}
                            titleTypographyProps={{variant: "h4", align: "center", color: "primary"}}/>
                <CardContent sx={{paddingTop: "0"}}>
                    <List>
                        {
                            topMovies.map((movie) => (
                                <ListItem key={movie.imdbID} sx={{paddingTop: "2px", paddingBottom: "2px"}}>
                                    <ListItemButton key={movie.imdbId}>
                                        <ListItemIcon>
                                            <Checkbox checked={movie.Watched} onChange={() => toggleWatch(movie.imdbID)} />
                                        </ListItemIcon>
                                        <ListItemText primary={movie.Title}/>
                                    </ListItemButton>
                                </ListItem>

                            ))
                        }

                    </List>
                </CardContent>

            </Card>
        </Box>
    );
};

export default TopMovies;
