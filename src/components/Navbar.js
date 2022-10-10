import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/Coins">Coins</NavLink>
        </li>
        <li>
          <NavLink to="/CoinsInfo">Coin Info</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
