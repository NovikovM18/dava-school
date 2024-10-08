import './App.scss';
import React from "react";
import {
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Home from './pages/Home'
import Stuff from './pages/Stuff'
import Clothing from './pages/Clothing'

function App() {
  return (
    <div className="App">
      <header className="App_header">
        <h1 className='App_header__title'>
          DAVA SCHOOL
        </h1>

        <nav className='App_header__nav'>
          <NavLink 
            to="/"
            className="link"
            activeclassname="active"
          >
            <span>home</span>
          </NavLink >

          <NavLink 
            to="/stuff"
            className="link"
            activeclassname="active"
          >
            <span>stuff</span>
          </NavLink >
          
          <NavLink 
            to="/clothing"
            className="link"
            activeclassname="active"
          >
            <span>clothing</span>
          </NavLink >
        </nav>
      </header>

      <main className='App_main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stuff" element={<Stuff />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
