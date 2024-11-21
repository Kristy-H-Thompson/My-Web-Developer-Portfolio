import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import{Home, Nopage, StaffSyncPage, Starstarpage, Straypawspage, SkyWatchersPage, WheelsPage, TripMosaic} from './pages'


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starstar" element={<Starstarpage />} />
        <Route path="/straypaws" element={<Straypawspage />} />
        <Route path="/staffsync" element={<StaffSyncPage />} />
        <Route path="/skywatchers" element={<SkyWatchersPage />} />
        <Route path="/wheels" element={<WheelsPage />} />
        <Route path="/tripmoasic" element={<TripMosaic />} />

        <Route path="*" element={<Nopage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
