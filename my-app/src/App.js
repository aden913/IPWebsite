import React from "react";

//NAVIGATION
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import CSharp from './pages/CSharp';
import CPlusPlus from './pages/CPlusPlus';
import HTML from './pages/HTML';
import PHP from './pages/PHP';
import JS from './pages/JS';
import ReactPage from './pages/ReactPage';
import DB from './pages/DB';
import VB from './pages/VB';
import Apps from './pages/Apps';
import Contact from './pages/Contact';
import Header from './components/Header';
//SubPages
import Poems from './pages/PoemsReact/Poems';
import Art from './pages/artReact/Art';
import Three from './pages/Three.js';

//stylesheets
import './pages/styles/font.css';
import './pages/styles/aesthetics.css';
import './pages/styles/legend.css';
import './pages/styles/structure.css';
import './pages/styles/media.css';
function App() {
  
  return (

    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/Apps" element={<Apps />} />
      <Route path="/CPlusPlus" element={<CPlusPlus />} />
      <Route path="/CSharp" element={<CSharp />} />
      <Route path="/DB" element={<DB />} />
      <Route path="/HTML" element={<HTML />} />
      <Route path="/JS" element={<JS />} />
      <Route path="/PHP" element={<PHP />} />
      <Route path="/ReactPage" element={<ReactPage />} />
      <Route path="/VB" element={<VB />} />
      <Route path="/Contact" element={<Contact />} />

      <Route path="/Poems" element={<Poems />} />
      <Route path="/Art" element={<Art />} />
      <Route path="/Three" element={<Three />} />
    </Routes>
  </Router>

  );
}

export default App;
