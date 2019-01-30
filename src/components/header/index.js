import React from 'react';
import Radium from 'radium';

import style from './headerStyle';

const Header = () => {
  return(
    <nav style={style.header}>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Player 360</a>
        <ul className="right">
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Radium(Header);