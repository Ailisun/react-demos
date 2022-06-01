import React from 'react';
const IMG_API = "https://image.tmdb.org/t/p/w500"
const Movie = ({title, poster_path, overview, vote_average}) => {
    return (
        <div className="movie">
            <img src={IMG_API+poster_path} alt = {title}/>
            <div className="movie-info">
                <h5>{title}</h5>
                <span>{vote_average}</span>
            </div>
        </div>
    );
};

export default Movie;