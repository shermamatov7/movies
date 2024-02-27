import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const ActorModal = ({ actor, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal">
                <h2>{actor.name}</h2>
                <p>Known for: {actor.known_for.join(', ')}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div >
    );
};
const Actors = ({ actors }) => {
    const [selectedActor, setSelectedActor] = useState(null);

    const openModal = (actor) => {
        setSelectedActor(actor);
    };

    const closeModal = () => {
        setSelectedActor(null);
    };
    return (
        <div id='img'>
            <div className='container'>
                <div className='wrapper'>
                    <h1>Actors</h1>
                    <div className="actors-list">
                        {actors && actors.length > 0 ? (
                            actors.map((actor) => (
                                <div key={actor.id} className="actor-item">
                                    <Link to={`/actorsDetails/${actor.id}`} onClick={() => openModal(actor)}>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                                            alt={actor}
                                        />
                                        <p>{actor.name}</p>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis molestias nobis exercitationem cumque officiis, voluptatem, aliquam in repellendus illum, impedit unde recusandae ipsum. Porro reiciendis fugiat sed possimus ipsa?</p>
                        )}
                    </div>
                </div>
            </div>

            {selectedActor && (
                <ActorModal actor={selectedActor} onClose={closeModal} />
            )}
        </div>
    );
};

export default Actors;
