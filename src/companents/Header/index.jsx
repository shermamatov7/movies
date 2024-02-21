import React from 'react';
import './header.css'
import { NavLink, useNavigate } from 'react-router-dom';


const Header = ({ setValue }) => {
    const nav = useNavigate()
    function navigate() {
        nav(`/search`)
    }
    return (
        <header>
            <div className="container">
                <div className="header">
                    <h1>BAYASTAN</h1>
                    <nav>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/popular'}>Popular</NavLink>
                        <NavLink to={'/top'}>Top rated</NavLink>
                    </nav>
                    <div className="header-work">
                        <input onChange={(event) => {
                            setValue(event.target.value)
                        }} type="text" placeholder='Search...' />
                        <button onClick={() => {
                            navigate()
                        }}>Search</button>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;