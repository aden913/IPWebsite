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
import './images/TTChocolates-Regular.otf';
import './App.css';


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
    </Routes>
  </Router>

  );
}

export default App;
