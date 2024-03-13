import React, { useEffect, useState } from 'react'
import { key } from '../../key'
import axios from 'axios'
import './video.css'

function Videoo({ id }) {
    const [actorMovie, setactorMovie] = useState([])
    function getActorMovie(key, id) {
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`)
            .then((res) => {
                setactorMovie(res.data.cast)
            })
    }
    useEffect(() => {
        getActorMovie(key, id)
    }, [id])

    return (
        <div className='actorMovie'>
            <div className="container">
                <div className="actorMovie">

                    {
                        actorMovie.map(el => (
                            <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} alt="" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Videoo;