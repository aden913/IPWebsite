import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo250.png';

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(prevState => !prevState);
  };

  return (
    <div>
      <header id="logo">
        <img src={logo} alt="Logo" />
      </header>
      <button className="hamburger" onClick={toggleMobileNav}>
        &#9776; {/* Hamburger icon */}
      </button>

      <nav>
        <ul id="navbar">
          <li class="headerLi"><Link to="/">About</Link></li>
          <li class="headerLi"><Link to="/CSharp">CSharp</Link></li>
          <li class="headerLi"><Link to="/CPlusPlus">C++</Link></li>
          <li class="headerLi"><Link to="/HTML">HTML</Link></li>
          <li class="headerLi"><Link to="/PHP">PHP</Link></li>
          <li class="headerLi"><Link to="/JS">JS</Link></li>
          <li class="headerLi"><Link to="/ReactPage">REACT</Link></li>
          <li class="headerLi"><Link to="/DB">DB</Link></li>
          <li class="headerLi"><Link to="/VB">VB</Link></li>
          <li class="headerLi"><Link to="/Apps">Apps</Link></li>
          <li class="headerLi"><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>

      <nav>
        <ul id="mobileNav" className={isMobileNavOpen ? 'open' : ''}>
          <div id="flexDiv">
          <li class="headerLi" onClick={toggleMobileNav}><Link to="/">About</Link></li>
          <li class="headerLi" onClick={toggleMobileNav}><Link to="/CSharp">CSharp</Link></li>
          <li class="headerLi" onClick={toggleMobileNav}><Link to="/CPlusPlus">C++</Link></li>
          <li class="headerLi" onClick={toggleMobileNav}><Link to="/HTML">HTML</Link></li>
          <li class="headerLi" onClick={toggleMobileNav}><Link to="/PHP">PHP</Link></li>
          <li class="headerLi" onClick={toggleMobileNav}><Link to="/JS">JS</Link></li>
          <li class="headerLi" onClick={toggleMobileNav}><Link to="/ReactPage">REACT</Link></li>
          <li class="headerLi" onClick={toggleMobileNav}><Link to="/DB">DB</Link></li>
          <li class="headerLi" onClick={toggleMobileNav}><Link to="/VB">VB</Link></li>
          <li class="headerLi" onClick={toggleMobileNav}><Link to="/Apps">Apps</Link></li>
          <li class="headerLi" onClick={toggleMobileNav}><Link to="/Contact">Contact</Link></li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
