import React from 'react';
import { FaArrowLeft, FaUndoAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import image from '../assets/images/headlogo.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="content-holder">
          <NavLink to="/" className="holder">
            <FaArrowLeft className="back-icon" />
            <div className="nav-holder">
              <img src={image} alt="CoinImage" className="nav-image" />
            </div>
            <FaUndoAlt className="back-icon" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
