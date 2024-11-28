import React from 'react';
import './assets/fonts/fonts.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; 
import Header from './components/Header';
import PolygonTab from './pages/Polygon/PolygonTab';
import LouisDazyTab from './pages/LouisDazy/LouisDazyTab';
import LightonartTab from './pages/LightonArt/LightonartTab';
import LukasTab from './pages/Lukas/LukasTab';
import OelhanTab from './pages/Oelhan/OelhanTab';
import ExhibitionsTab from './pages/Exhibitions/ExhibitionsTab';


const App = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Polygon" element={<PolygonTab />} />
                <Route path="/LouisDazy" element={<LouisDazyTab />} />
                <Route path="/Lightonart" element={<LightonartTab />} />
                <Route path="/Lukaswork" element={<LukasTab />} />
                <Route path="/Oelhantv" element={<OelhanTab/>} />
                <Route path="/Exhibitions" element={<ExhibitionsTab />} />

            </Routes>
        </BrowserRouter>
    );
};

export default App;
