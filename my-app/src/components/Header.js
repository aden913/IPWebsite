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

  const arrowLeft = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      id="arrowSVG"
      stroke="#02c8f0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-left"
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );

  const arrowRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      id="arrowSVG"
      stroke="#02c8f0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-right"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
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
          <div id="headerButtonBox">
            <div id="slideButtons" className={areButtonsVisible ? 'visible' : 'hidden'}>
              <DarkModeToggle />
              <FontButton />
            </div>

            <button className="toggleButtonBox" onClick={toggleButtons}>
              {areButtonsVisible ? arrowRight : arrowLeft}
            </button>
          </div>
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
