import ax from 'axios';
import { useEffect, useState } from 'react';
import { key } from '../../key';
import MovieCard from '../MovieCard';

const MovieSearch = () => {
    const [searsh, setSearch] = useState([])
    function getMovieSearch() {
        ax(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${getMovieSearch}`)
            .then(res => {
                console.log(res);
                setSearch(res.data.results);
            })
    }
    console.log(searsh)
    useEffect(() => {
        getMovieSearch()
    }, [])

    return (
        <div id='movie'>
            <div className="container">
                <div className="movie">
                    {
                        searsh.map(el => <MovieCard el={el} />)
                    }
                </div>
            </div>
        </div>
    )
};

export default MovieSearch;


