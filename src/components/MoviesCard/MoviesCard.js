import React from 'react';
import {miniPoster} from "../../constants";


import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {moviesActions} from "../../redux";

const MoviesCard = ({movie}) => {

    const {title, backdrop_path, vote_average, poster_path} = movie;
    const link = (miniPoster+poster_path)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const movieInfo = () => {
        dispatch(moviesActions.getCurentMovies({title}))
        navigate(`/movie`, {state: movie})
    }
    return (
        <div onClick={movieInfo}>
            <img src={link} alt={title}/>
            <div>
                <h3>{title}</h3>
                <h3>Rating Comp - {vote_average}</h3>
            </div>
        </div>
    );
};

export {MoviesCard};