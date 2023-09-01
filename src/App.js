import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import{home, nopage, starstarpage, straypawspage} from './pages'


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/starstar" element={<starstarpage />} />
        <Route path="/straypaws" element={<straypawspage />} />
        <Route path="*" element={<nopage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
