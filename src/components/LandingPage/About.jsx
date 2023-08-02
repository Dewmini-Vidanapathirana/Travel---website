import React from 'react';
import AboutI from '../Image/im2.jpg';

const About = () => {
  return (
    <div className='h-[70vh]'>
      <div className='flex w-[90%] mx-auto  bg-green-50 shadow-lg rounded-lg  mt-10 h-[500px] hover:drop-shadow-xl'>
        <div className='w-[50%] px-4 mt-10 mb-2'>
          {/* <h3 className='text-4xl text-green-500 font-semibold  w-[50%] mt-10'>About Us</h3> */}
          <p className='mb-8 font-sans text-4xl font-bold'>Why We're Passionate
            About Budget Travel?</p>
          <p className='text-1xl'> "At Travel Adventure , we believe that everyone should have the opportunity to explore the world, regardless of their budget. That's why we created this platform - to help travelers discover affordable destinations, plan their dream trips, and stick to their budget. Our team of passionate travelers is committed to providing you with the tools, tips, and resources you need to make your travel dreams a reality. Join us on this journey and start exploring the world without breaking the bank. everyone should have the opportunity to explore the world, regardless of their budget. That's why we created this platform - to help travelers discover affordable destinations, plan their dream trips, and stick to their budget. Our team of passionate travelers is committed to providing you with the tools,
            tips,exploring the world without " </p>

        </div>
        <div className='h-[100%] w-[50%] px-14'>
          {<img className='mt-20 w-[200%] ' src={AboutI} alt="" />}
        </div>
      </div>
    </div>
  )
}

export default About