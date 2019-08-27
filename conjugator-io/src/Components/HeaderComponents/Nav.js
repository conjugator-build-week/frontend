import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className='nav-bar'>
      <NavLink exact to='/' className='link'>Spanish Conjugator</NavLink>
      <NavLink to='/' className='link'>Login</NavLink>
    </div>
  )
}

export default Nav;
