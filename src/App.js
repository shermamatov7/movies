import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './companents/Header';
import Home from './companents/pages/Home/index.jsx';
import Popular from './companents/pages/Popular/popular';
import Toprated from './companents/pages/Toprated/index.jsx'
import MovieDetails from './companents/pages/MovieDetails/index.jsx';
import Actors from './companents/pages/Actors/index.jsx';
import ActorsDet from './companents/pages/ActorsDet/index.jsx';
import './App.css';
import Videoo from './companents/pages/Videoo/index.jsx';

function App() {
  const [value, setValue] = useState('');
  const [state, setState] = useState(false)


  return (
    <div style={{ background: state ? "white" : "green" }} className="App">
      <Header setValue={setValue} state={state} setState={setState} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/top' element={<Toprated />} />
        <Route path='/movieDetails/:bayastan' element={<MovieDetails />} />
        <Route path='/actors' element={<Actors />} />
        <Route path='/actorsDetails/:movieId' element={<ActorsDet />} />
      </Routes>

    </div>
  );
}

export default App;
