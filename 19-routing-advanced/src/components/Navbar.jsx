import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-4 bg-blue-800'>
      <h1 className='text-xl font-bold'>Purna</h1>
      <div className='flex gap-8'>
        <a className='text-lg font-bold' href="/">Home</a>
        <a className='text-lg font-bold' href="/about">About</a>
        <a className='text-lg font-bold' href="/contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar
