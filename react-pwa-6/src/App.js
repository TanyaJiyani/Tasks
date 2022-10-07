import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css';
import DisneyCharacters from './components/disneyCharacters';
import Home from './components/home';
import Users from './components/users';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/disneyCharacters' element={<DisneyCharacters />}></Route>
          <Route path='/users' element={<Users />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
