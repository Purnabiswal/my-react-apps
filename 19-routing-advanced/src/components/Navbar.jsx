import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-4 bg-blue-800'>
      <h3 className='text-xl font-bold'>Purna</h3>
      <div className='flex gap-8'>
        
        <Link className='text-lg font-bold' to="/">Home</Link>
        <Link className='text-lg font-bold' to="/about">About</Link>
        <Link className='text-lg font-bold' to="/product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar
