import React from 'react';
import Logoo from './Image/im1.png';
import { BsFacebook, BsTwitter, BsYoutube, BsFillTelephoneInboundFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#0f172a] h-[45vh] text-gray-100'>
      <div className='max-w-[80%] mx-auto flex justify-center items-center text-center '>


        <div className='py-4'>
          <h3 className='text-5xl italic text-blue-400'>Travel Adventure</h3>
          <img className='items-center justify-center h-32 mx-auto w-34' src={Logoo} alt="rrtr" />
          <p>Terms and conditions</p>
       
            <p>© 2023 Travel Adventure. All Rights Reserved</p>


          <ul className='px-4 py-2 text-lg'>
            <li>

              <Link to="/login">Admin Login</Link>
            </li>

          </ul>
          <div className='flex items-center justify-center gap-6'>
            <p className='text-2xl cursor-pointer hover:text-yellow-600'><BsFacebook /></p>
            <p className='text-2xl cursor-pointer hover:text-yellow-600'><BsYoutube /></p>
            <p className='text-2xl curso2-pointer hover:text-yellow-600'><BsFillTelephoneInboundFill /></p>
          </div>
        </div>

      </div>
    </div >
  )
}

export default Footer