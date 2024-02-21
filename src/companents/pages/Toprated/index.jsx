import React, { useEffect, useState } from "react";
import { key } from "../../key";
import "./top.css"
import axios from "axios";
import CardCinema from "../CardCinema";
import logos from '../../images/logos.svg'

const TopRadet = () => {
    const [top, setTop] = useState([])
    const [next, setNext] = useState(1)

    function getTopRadet() {
        setTop('')
        setTimeout(() => {
            axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${next}`)
                .then((res) => {
                    setTop(res.data.results)
                })
        }, 2000)
    }
    console.log(top)
    useEffect(() => {
        getTopRadet()
    }, [next])

    return (
        <div>
            <div className="container">
                {
                    !top.length ?
                        <center>
                            <img className="logo" src={logos} alt="" />
                        </center> :
                        <div className="">
                            <div className="top">
                                {
                                    top.map((el) => <CardCinema data={el} />)
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
        </div>
    )
}
export default TopRadet;