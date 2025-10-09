import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <NavLink to='/' className='flex items-center'>
        <img className='w-[40px]' src={logo} alt="" />
    <span className=" text-xl">HERO.IO</span>
    </NavLink>
  </div>
  <div className="navbar-center lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
       <li>
        <NavLink className='hidden md:block' to='/'>Home</NavLink>
       </li>
       <li>
        <NavLink to='/products'>Apps</NavLink>
       </li>
       <li>
        <NavLink to='/wishlist'>Installation</NavLink>
       </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2]" href="https://github.com/Nayem7890">Contribute</a>
  </div>
</div>
    );
};

export default Navbar;