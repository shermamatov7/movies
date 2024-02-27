import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { key } from '../../key';
import './video.css';

const MovieVideos = ({ kinoId }) => {
    const [videos, setVideos] = useState([]);
    const [btn, setBtn] = useState(false);
    const [btns, setBtns] = useState(2);

    const getVideos = () => {
        axios(`https://api.themoviedb.org/3/movie/${kinoId}/videos?api_key=${key}&language=en-US`)
            .then((res) => {
                setVideos(res.data.results);
                setBtn(!btn);
            })
            .catch((error) => {
                console.error('Error fetching videos:', error);
            });
    };

    useEffect(() => {
        getVideos();
    }, [kinoId]);

    const kino = () => {
        setBtns((trailer) => trailer + 2);
    };

    const video = () => {
        setBtns(0);
    };
    return (
        <div className='videos'>
            <div className='container'>
                <div className='videos-wrapper'>
                    <h1>Trailers</h1>
                    <div className='trailers'>
                        {videos.slice(0, btns).map((video) => (
                            <div key={video.key} className='trailer'>
                                <iframe
                                    width='560'
                                    height='315'
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    title='YouTube video player'
                                    frameBorder='0'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </div>
                {btns < videos.length ? (
                    <div className="btn">
                        <button onClick={kino}>Показать еще</button>
                    </div>
                ) : (
                    <div className="btn">
                        <button onClick={video}>Скрыть</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieVideos;
