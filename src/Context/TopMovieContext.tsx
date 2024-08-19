import {createContext, ReactNode, useReducer} from "react";
import {TopMovie, topMovieReducer, TopMovieState} from "../reducer/TopMovieReducer.ts";
import axios from "axios";
import {TopMovieActionType} from "../reducer/types.ts";
import topMovieInfo from "../api/getTopMovies.ts";


type TopMovieContextProps={
    children: ReactNode;
}

type TopMovieContextDefault={
    topMovies: TopMovieState;
    getTopMovies: ()=> Promise<void>;
    toggleWatch: (imdbID:string)=> void;
}
const TopMovieDefault:TopMovieState=[];

export const TopMovieContext=createContext<TopMovieContextDefault>({
    topMovies: TopMovieDefault,
    getTopMovies: ()=>Promise.resolve(void 0),
    toggleWatch:(imdbID:string)=>{}
});
const TopMovieContextProvider=({children}:TopMovieContextProps)=>{
    const [topMovies,dispatch]=useReducer(topMovieReducer,TopMovieDefault);

    //getTopMovie from api
    const getTopMovies= async()=>{
        const topMoviess=await Promise.all(topMovieInfo);
        dispatch({type:TopMovieActionType.GET_TOP_MOVIES,payload:topMoviess.map(topMovie=>({...topMovie.data,Watched:false}))});

    }

    //toggle watch
    const toggleWatch=(imdbID:string)=>{
        dispatch({type:TopMovieActionType.TOGGLE_MOVIES,payload:imdbID})
    }
    const TopMovieContextData={
        topMovies,
        getTopMovies,
        toggleWatch
    }
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <TopMovieContext.Provider value={TopMovieContextData}>
            {children}
        </TopMovieContext.Provider>
    )
}
export default TopMovieContextProvider;