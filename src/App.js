import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './companents/Header';
import Home from './companents/pages/Home/index.jsx';
import Popular from './companents/pages/Popular/popular';
import MovieSearch from './companents/pages/MovieSearch/index.jsx';
import { useState } from 'react';
import MovieCard from './companents/pages/MovieCard/index.jsx';
import Toprated from './companents/pages/Toprated/index.jsx'
import MovieDetails from './companents/pages/MovieDetails/index.jsx';

function App() {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      <Header setValue={setValue} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/search' element={<MovieSearch />} />
        <Route path='/movie' element={<MovieCard />} />
        <Route path='/top' element={<Toprated />} />
        <Route path='/movieDetails/:bayastan' element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;


