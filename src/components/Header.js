import React from 'react';
import Radium from 'radium';

const style = {
  header: {
    backgroundColor: '#222222'
  },
  logo: {
    marginLeft: '20px'
  }
}

const Header = () => {
  return(
    <nav style={style.header}>
      <div className="nav-wrapper">
        <a href="/" style={style.logo} className="brand-logo">Player 360</a>
        <ul className="right">
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Radium(Header);