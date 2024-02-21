import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { key } from '../../key';
import './movie.css'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { PiHandHeartFill } from "react-icons/pi";
import { RxBookmarkFilled } from "react-icons/rx";
import { PiStarFill } from "react-icons/pi";



const MovieDetails = () => {
    const [del, setDel] = useState({})
    const { bayastan } = useParams();
    const [like, setLike] = useState(false);
    const [menu, setMenu] = useState(false);
    const [star, setStar] = useState(false);
    const getDetails = (key, movieId) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`)
            .then((res) => {
                setDel(res.data)
                console.log(res.data);
            })
    }
    useEffect(() => {
        getDetails(key, bayastan)
    }, [])
    return (
        <div id="details" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.809), rgba(0, 0, 0, 0.727) 50%, rgba(0, 0, 0, 0.84) 100%),url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${del.backdrop_path}}) no-repeat center/cover`,
            minHeight: '100vh'
        }}>

            <div className="container">
                <div className="details">
                    <div>
                        <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${del.poster_path}`} alt="" />
                    </div>
                </div>
                <div className="details1">
                    <h1>{del.title}</h1>
                    <div className="div">
                        <h2>({del.release_date})</h2>
                        <h2>{Math.floor(del.runtime / 60)}h {del.runtime % 60}min</h2>
                        <h3>{del.taglane}</h3>
                    </div>
                    <div className="details-icon">
                        <div className="icon">
                            <a href="#">
                                <AiOutlineMenuUnfold />
                            </a>
                        </div>
                        <div className="icon">
                            <a
                                href="#" onClick={() => setLike(!like)}
                                style={{
                                    color: like ? "red" : "white",
                                }}
                            >
                                <PiHandHeartFill />
                            </a>
                        </div>
                        <div className="icon">

                            <a href="#" onClick={() => setMenu(!menu)} style={{
                                color: menu ? "black" : "white",
                            }}>
                                <RxBookmarkFilled />
                            </a>

                        </div>
                        <div className="icon">
                            <a href="#" onClick={() => setStar(!star)} style={{
                                color: star ? "yellow" : "white",
                            }}>
                                <PiStarFill />
                            </a>

                        </div>
                    </div>
                    <h3>{del.taglane}</h3>
                    <h2>{del.overview}</h2>
                    <h1>{del.popularity}</h1>
                </div>
            </div>
        </div >
    );
};
export default MovieDetails;
























