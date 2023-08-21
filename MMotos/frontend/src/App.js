import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import GuiasPages from './pages/GuiasPage';
import GaleriaPages from './pages/GaleriaPage';
import ConcesionarioDigitalPage from './pages/ConcesionarioDigitalPage';

import './App.css'


function App() {
  return (
    <div ClassName="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/nosotros' element={<NosotrosPage />} />
          <Route path='/novedades' element={<NovedadesPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
          <Route path='/guias' element={<GuiasPages/>}/>
          <Route path='/galeria' element= {<GaleriaPages/>}/>
          <Route path='/concesionarioDigital' element={<ConcesionarioDigitalPage/>}/>
        </Routes>

      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
