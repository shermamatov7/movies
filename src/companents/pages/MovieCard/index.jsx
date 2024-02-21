import React from 'react';
import MovieSearch from '../MovieSearch';
import { key } from '../../key';

const MovieCard = ({ el }) => {
    return (
        <div className="movie-block">
            <img
                src={`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${MovieSearch}`}
                alt="" />
            <h3>{el.title.length > 50 ? "<br/>": el.title}</h3>
        </div>
    );
};

export default MovieCard;
