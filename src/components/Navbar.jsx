import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Image/im1.png';


const Navbar = () => {
  return (
    <div className='z-10 text-black bg-transparent shadow-md -500 '>
      <div className='max-w-[90%] mx-auto flex justify-between items-center'>
        <div className='flex items-center cursor-pointer w-28'>
          <img className='h-18 w-28' src={Logo} alt="rrtr"/>
          <div>
            <Link to='/'><h2 className='text-2xl font-semibold text-blue-400 uppercase border-b-2'>Travel</h2></Link>
            <h3 className='text-blue-400 text-md'> Adventure</h3>
          </div>
        </div>
        <div className='flex'>
          <ul className='flex gap-6 px-4 py-2 text-xl font-semibold'>
            <li>
            <Link to='about' className=' hover:text-blue-300'>ABOUT</Link>
            </li>
            <li>
              <Link to='services' className=' hover:text-blue-300'>BUDGET</Link>
            </li>
            <li>
            <Link to='appoinment' className=' hover:text-blue-300'>TRAVEL DEAL</Link>
            </li>
            <li>
            <Link to='review'a className='hover:text-blue-300' href="">REVIEWS</Link>
            </li>
            <li>
            <Link to='contact' className=' hover:text-blue-300'>CONTACT </Link>
            </li>
          </ul>
        </div>
        <div className='px-4 py-2 text-white bg-blue-400 border rounded-md hover:bg-white border-2-green-600 w-30 text-xxl hover:text-black'>
          <Link to='/login'><button>Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar