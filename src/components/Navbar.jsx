import React from 'react';
import { Link } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';




const Navbar = () => {
  return (
    <div className='flex p-2 bg-gray-200 justify-between'>
      <div className="flex justify-center items-center logo mx-2 font-bold text-slate-600 text-lg">
        <span className='bg-red-500 text-white pl-2 pr-1 rounded-md font-medium'>Rent</span>Trip
      </div>
      <div className="nav-items flex gap-3 justify-center items-end w-[60%] font-semibold text-sm text-slate-700">
        <Link to='/' ><span>Home</span></Link>
        <Link to='/new-trip'><span>New trip</span></Link>
        <Link to='/my-trips'><span>My trips</span></Link>
        <Link to='/contact'><span>Contact</span></Link>
        <Link to='/about'><span>About</span></Link>
      </div>
      <div className="signup-button mr-2">
        <Link 
         to='/signin'
         className='flex justify-center items-center gap-1 hover:text-green-600'>
          Signin
          <FaUserCircle/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar