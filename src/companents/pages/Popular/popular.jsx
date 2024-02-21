import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { key } from '../../key';
import './popular.css'
import CardCinema from '../CardCinema';
import logos from '../../images/logos.svg'
const Popular = () => {
    const [pop, setPop] = useState([]);
    const [next, setNext] = useState(1)
    function getPopular() {
        setPop('')
        setTimeout(() => {
            axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${next}`)
                .then((res) => {
                    setPop(res.data.results)
                });
        }, 2000)
    }
    console.log(pop);
    useEffect(() => {
        getPopular()
    }, [next]);
    return (
        <section id='movie5'>
            <div className="container">
                {
                    !pop.length ?
                        <center>
                            <img className='logo' src={logos} alt="" />
                        </center> :
                        <div className="">
                            <div className='movieBlocks'>

                                {
                                    pop.map((el) => <CardCinema data={el} />)
                                }
                            </div>
                            <div className="btn1">
                                <button
                                    onClick={() => {
                                        if (next > 1) {
                                            setNext(next - 1)
                                        }
                                    }}>back</button>
                                <button
                                    onClick={() => {
                                        setNext(next + 1)
                                    }}>next</button>
                            </div>

                        </div>
                }
            </div>
        </section>

    );
};

export default Popular;

