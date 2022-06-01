import Movie from "./components/Movie";
import {useEffect, useState} from "react";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cd21f7fb0e97ea8aa8e67a8a9d5a0007&page=1"
// const IMG_API = "https://image.tmdb.org/t/p/w500"
// const SEARCH_API = "https://api.themoviedb.org/3/search/keyword?query=super"

const App = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch(FEATURED_API)
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setMovies(data.results)
            })

    },[])
    return (
        <div className="movie-container">
            {movies.length > 0 && movies.map((movie) => <Movie  key = {movie.id} {...movie}/>)}
        </div>
    );
};

export default App;