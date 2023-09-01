import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import{Home, Nopage, Starstarpage, Straypawspage} from './pages'


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starstar" element={<Starstarpage />} />
        <Route path="/straypaws" element={<Straypawspage />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
