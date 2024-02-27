import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { key } from '../../key';
import { useParams } from 'react-router-dom';
import './index.css'
const ActorsDet = () => {
    const [actorsDet, setActorsDet] = useState([]);
    const { movieId } = useParams()

    function getActorsDet(apiKey) {
        axios(`https://api.themoviedb.org/3/person/${movieId}?api_key=${key}&language=en-US`)
            .then((res) => {
                setActorsDet(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    useEffect(() => {
        console.log();
        getActorsDet(key);
    }, []);
    const { name, biography, popularity, birthday } = actorsDet
    return (
        <section id="actordet"
            style={{
                background: "aqua",
            }}>
            <div className="container">
                <div className="actordet">
                    <div>
                        <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${actorsDet.profile_path}`} alt="" />
                    </div>
                    <div className="actors3">
                        <h1>{name}</h1>
                        <h3>{biography}</h3>
                        <h2>{popularity}</h2>
                        <h2>{birthday}</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActorsDet;
