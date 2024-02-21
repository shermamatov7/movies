import React from 'react';
import { Link } from 'react-router-dom';

const CardCinema = ({ data }) => {
    return (
        <div>
            <div className="top">
                <div className="movieBlock">
                    <Link to={`/movieDetails/${data.id}`}>
                        <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`} alt="" />
                        <h3>{data.title}</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardCinema;