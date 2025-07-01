import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/events">Events</NavLink>
      </li>
      <li>
        <NavLink to="/add-event">Add Event</NavLink>
      </li>
      <li>
        <NavLink to="/my-events">My Events</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {' '}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{' '}
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-lg dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow text-primary-content">
            {navMenu}
          </ul>
        </div>
        <Link to="/">
            <img src="/evenzo-logo.svg" alt="evenzo" className='h-12' />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-primary-content text-base font-medium">{navMenu}</ul>
      </div>
      <div className="navbar-end font-medium">
        <NavLink to="/login" className='btn'>Log In</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
