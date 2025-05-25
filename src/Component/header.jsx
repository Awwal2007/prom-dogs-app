import React, { useState } from 'react';
import logo from '../assets/prom dogs logo.png'; 
import '/src/Component/Header.css';
import {Link} from "react-router-dom"
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to='/'>
            <img src={logo} alt="Logo" className="logo" />
        </Link>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <nav className={`nav-bar ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/breeds">Breeds</a></li>
          <li><a href="/book-a-puppy">Book A Puppy</a></li>
          <li><a href="/stud-dogs">Stud Dogs</a></li>
          <li><a href="/dog-rehoming">Dog Rehoming</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/pet-portrait">Pet Portrait</a></li>
          <li><a href="/contact-Us">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
