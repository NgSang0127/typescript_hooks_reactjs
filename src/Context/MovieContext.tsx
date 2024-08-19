import React, { createContext, ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Định nghĩa kiểu cho props của provider
type MovieContextProps = {
    children: ReactNode;
}

// Định nghĩa kiểu cho đối tượng Movie
type Movie = {
    id: string;
    title: string;
}

// Định nghĩa kiểu cho context mặc định
type MovieContextDefault = {
    movies: Movie[];
    addMovie: (title: string) => void;
    deleteMovie: (id: string) => void;
}

// Dữ liệu mặc định cho context
const movieContextDefaultData: MovieContextDefault = {
    movies: [],
    addMovie: () => {},
    deleteMovie: () => {}
}

// Tạo context với kiểu dữ liệu mặc định
export const MovieContext = createContext<MovieContextDefault>(movieContextDefaultData);

const MovieContextProvider = ({ children }: MovieContextProps) => {
    const [movies, setMovies] = useState<Movie[]>(movieContextDefaultData.movies);

    // Thêm phim mới
    const addMovie = (title: string) => {
        setMovies([...movies, { id: uuidv4(), title }]);
    };

    // Xóa phim theo id
    const deleteMovie = (id: string) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    // Dữ liệu context động
    const movieContextData = { movies, addMovie, deleteMovie };

    return (
        <MovieContext.Provider value={movieContextData}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;
