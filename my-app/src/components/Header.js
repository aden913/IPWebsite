import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import FontButton from './FontButton';
import DarkModeToggle from './DarkModeToggle';

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [areButtonsVisible, setAreButtonsVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prevState) => !prevState);
  };

  const toggleButtons = () => {
    setAreButtonsVisible((prevState) => !prevState);
  };
  const settingsIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      id="settings"
      stroke="#02c8f0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-left"
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );

  

  return (
    <div>
  <header id="logo">
    <div id="logoDiv">
      <div id="charactersLogo">
        <span id="logoColon">:</span>{'}'}
      </div>
      <div id="wordsLogo">
        <strong>INQUISITIVE</strong>
        <br />
        PROGRAMMING
      </div>

      <button className="hamburger" onClick={toggleMobileNav}>
        &#9776; {/* Hamburger icon */}
      </button>
      <div id="slideButtons">
        {areButtonsVisible ? (
          <>
            <DarkModeToggle />
            <FontButton />
          </>
        ) : null}
      </div>

      <button className="toggleButtonBox" onClick={toggleButtons}>
        {settingsIcon}
      </button>
    </div>
  </header>

  <nav>
    <ul id="navbar">
      <li className="headerLi">
        <Link to="/">About</Link>
      </li>
      <li className="headerLi">
        <Link to="/CSharp">CSharp</Link>
      </li>
      <li className="headerLi">
        <Link to="/CPlusPlus">C++</Link>
      </li>
      <li className="headerLi">
        <Link to="/HTML">HTML</Link>
      </li>
      <li className="headerLi">
        <Link to="/PHP">PHP</Link>
      </li>
      <li className="headerLi">
        <Link to="/JS">JS</Link>
      </li>
      <li className="headerLi">
        <Link to="/ReactPage">REACT</Link>
      </li>
      <li className="headerLi">
        <Link to="/DB">DB</Link>
      </li>
      <li className="headerLi">
        <Link to="/VB">VB</Link>
      </li>
      <li className="headerLi">
        <Link to="/Apps">Apps</Link>
      </li>
      <li className="headerLi">
        <Link to="/Contact">Contact</Link>
      </li>
    </ul>
  </nav>

  <nav>
    <ul id="mobileNav" className={isMobileNavOpen ? 'open' : ''}>
      <div id="flexDiv">
        <Link onClick={toggleMobileNav} to="/">
          <li className="headerLi">About</li>
        </Link>
        <Link onClick={toggleMobileNav} to="/CSharp">
          <li className="headerLi">CSharp</li>
        </Link>
        <Link onClick={toggleMobileNav} to="/CPlusPlus">
          <li className="headerLi">C++</li>
        </Link>
        <Link onClick={toggleMobileNav} to="/HTML">
          <li className="headerLi">HTML</li>
        </Link>
        <Link onClick={toggleMobileNav} to="/PHP">
          <li className="headerLi">PHP</li>
        </Link>
        <Link onClick={toggleMobileNav} to="/JS">
          <li className="headerLi">JS</li>
        </Link>
        <Link onClick={toggleMobileNav} to="/ReactPage">
          <li className="headerLi">REACT</li>
        </Link>
        <Link onClick={toggleMobileNav} to="/DB">
          <li className="headerLi">DB</li>
        </Link>
        <Link onClick={toggleMobileNav} to="/VB">
          <li className="headerLi">VB</li>
        </Link>
        <Link onClick={toggleMobileNav} to="/Apps">
          <li className="headerLi">Apps</li>
        </Link>
        <Link onClick={toggleMobileNav} to="/Contact">
          <li className="headerLi">Contact</li>
        </Link>
      </div>
    </ul>
  </nav>
</div>

  );
}

export default Header;
