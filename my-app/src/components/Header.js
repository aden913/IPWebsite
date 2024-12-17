import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../images/logo250.png';

function Header() {
  return (
    <div>
    <header id="logo"><img src={logo} alt="Logo"/></header>
    <nav>
    <ul id="navbar">
        <li><Link to="/">About</Link></li>
        <li><Link to="/CSharp">CSharp</Link></li>
        <li><Link to="/CPlusPlus">C++</Link></li>
        <li><Link to="/HTML">HTML</Link></li>
        <li><Link to="/PHP">PHP</Link></li>
        <li><Link to="/JS">JS</Link></li>
        <li><Link to="/ReactPage">REACT</Link></li>
        <li><Link to="/DB">DB</Link></li>
        <li><Link to="/VB">VB</Link></li>
        <li><Link to="/Apps">Apps</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>

    <nav>
    <ul id="mobileNav">
        <li><Link to="/">About</Link></li>
        <li><Link to="/CSharp">CSharp</Link></li>
        <li><Link to="/CPlusPlus">C++</Link></li>
        <li><Link to="/HTML">HTML</Link></li>
        <li><Link to="/PHP">PHP</Link></li>
        <li><Link to="/JS">JS</Link></li>
        <li><Link to="/ReactPage">REACT</Link></li>
        <li><Link to="/DB">DB</Link></li>
        <li><Link to="/VB">VB</Link></li>
        <li><Link to="/Apps">Apps</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
    </div>
  );
}

export default Header;
