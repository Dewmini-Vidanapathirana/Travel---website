import React from 'react';

import Her from '../Image/im3.jpg'


const ContactUs = () => {
  return (
    
    <div className='h-[100vh] justify-center bg-cover bg-no-repeat bg-center mt-[-75px]'style={{ backgroundImage: `url(${Her})` }}>
       
    <div className='w-[1200px] h-[80vh]  mx-auto mt-20 flex rounded-xl shadow-xl justify-center' >
        <div className='w-[50%] ml-[60px] mt-[100px] justify-center'>
            <h2 className='mb-4 text-4xl font-semibold text-black'>Contact Us</h2>
            <div className='w-[350px] h-[40px] bg-gray-50 items-center  rounded-lg flex'>
                <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Name' />
            </div>
            <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Email' />
            </div>
            <div className='w-[350px] h-[60px] bg-white items-center mt-4 rounded-lg flex'>
                {/* <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Message' /> */}
                <textarea className='h-[100%] w-[90%] ml-1 rounded-lg' name="" id="" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
            </div>
            <button className='bg-black text-white px-6 py-1 rounded-lg text-xl hover:text-green-500 hover:bg-white mt-[20px]'>
                Submit
            </button>
        </div>
       
           
        
    </div>
</div>
  )
}

export default ContactUs