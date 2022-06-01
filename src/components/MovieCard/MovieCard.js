import React, {useEffect, useState} from 'react';

let url = "https://api.themoviedb.org/3/movie?sort_by=popularity.desc&api_key=cd21f7fb0e97ea8aa8e67a8a9d5a0007&page=1"
const MovieCard = () => {
  const [movies, setMovies] = useState([])
    useEffect(async () => {
        const moviesResponse = fetch(url);
        const movies = await moviesResponse.json()

        setMovies(movies)
    },[])

    return (
        <div>
            
        </div>
    );
};

export default MovieCard;