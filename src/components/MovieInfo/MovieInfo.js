

import React from 'react';
import {useLocation} from "react-router-dom";
import {miniPoster} from "../../constants";
import {useSelector} from "react-redux";

const MovieInfo = () => {
    const {state} = useLocation();
    const   {adult,genre_ids,original_language, overview,
        poster_path,release_date,title,vote_average} = state
    const link = (miniPoster+poster_path)

    const {genres} = useSelector(state => state.movies)

    const dirtyGenresForOneMovie = genre_ids
        .map(value => genres.find(genre => genre.id === value));
    const genresForOneMovie = dirtyGenresForOneMovie
        .map(value =>value.name);
    const genresOfMovie = genresForOneMovie.toString()
        .replaceAll(',', ', ')
    return (
        <div >
            <div >
                <img src={link} alt={title}/>
            </div>
            <div >
                <h1>{title}</h1>
                <h2>{adult? <span>Category: <span >adult</span></span> : <span>Category:  <span>kids</span></span>}</h2>
                <h2>Release date:  <span >{release_date}</span></h2>
                <h2>Original language: <span>{original_language}</span></h2>
                <h2>Genres: <span >{genresOfMovie}</span></h2>
                <h1>Description.</h1>
                <h2>{overview}</h2>
                <h1>Rating - {vote_average}</h1>
            </div>
        </div>
    );
};

export {MovieInfo};