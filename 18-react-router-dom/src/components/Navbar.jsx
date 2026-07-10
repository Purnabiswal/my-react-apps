import React from 'react'
import { Link } from 'react-router-dom';
import Contact from '../pages/Contact';

const Navbar = () => {
  return (
    <div className="nav">
      <h2>Purna</h2>
      <div>
        <Link to='/' >Home</Link>
        <Link to='/about' >About</Link>
        
        <Link to="/contact" >Contact</Link>
        <Link to='/product' >Product</Link>
      </div>
    </div>
  );
}

export default Navbar
