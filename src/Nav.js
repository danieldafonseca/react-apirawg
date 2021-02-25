import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  const navStyle = {
    color: 'white'
  }

  return (
    <nav>
      <ul className='nav-links'>
        <Link style={navStyle} to={'/Home'}>
        <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
