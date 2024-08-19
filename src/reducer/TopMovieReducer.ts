import {TopMovieActionType} from "./types.ts";

type TopMovie = {
    imdbID: string;
    Title: string;
    Watched: boolean;
}

export type TopMovieState = TopMovie[];

type TopMovieAction =
    | {
    type: TopMovieActionType.GET_TOP_MOVIES;
    payload: TopMovie[];
}
    | {
    type:TopMovieActionType.TOGGLE_MOVIES;
    payload: string;
}

export const topMovieReducer = (state: TopMovieState, action: TopMovieAction) => {


    switch (action.type) {
        case TopMovieActionType.GET_TOP_MOVIES:
            return action.payload;
        case TopMovieActionType.TOGGLE_MOVIES:
            return state.map(topMovie=>topMovie.imdbID === action.payload ? {...topMovie,Watched:!topMovie.Watched}: topMovie);
        default:
            return state;
    }
}