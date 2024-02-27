import React, { useEffect, useState } from 'react';
import './header.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { CgDarkMode } from "react-icons/cg";



const Header = ({ setValue, state, setState }) => {
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
                    <CgDarkMode
                        className='icon' onClick={() => {
                            setState(!state)
                        }} />
                </div>
            </div>
        </header>
    )
};

export default Header;