import React from 'react';
import Single from '../Image/im 7.jpg';
 import Double from '../Image/im 8.jpg';
import Triple from '../Image/im9.png';

function Budget() {
    return (
      
        <div className='w-full py-[10rem] px-4 bg-green-50  '>
         
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 sm:px-4'>
                <div className='flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105'>
                      <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={Single} alt="" /> 
                    <h2 className='py-8 text-2xl font-bold text-center'>Basic </h2>
                    <p className='text-4xl font-bold text-center'>$150</p>
                    <div className='font-medium text-center'>
                        <p className='py-2 mx-8 mt-8 border-b '>Luxery Accomadation</p>
                        <p className='py-2 mx-8 mt-8 border '>Transport</p>
                        <p className='py-2 mx-8 mt-8 border '>Gide Facility</p>
                    </div>
                    <button className='text-blue-400 w-[200px] rounded-md font-medium my-6 mx-auto bg-black py-3 '>Buy</button>
                </div>
                <div className='flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl green-50 hover:scale-105'>
                     <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="" />  
                    <h2 className='py-8 text-2xl font-bold text-center'>Business</h2>
                    <p className='text-4xl font-bold text-center'>$200</p>
                    <div className='font-medium text-center'>
                        <p className='py-2 mx-8 mt-8 border-b '>50% Discout for Transport</p>
                        <p className='py-2 mx-8 mt-8 border '>Luxery Accomadation</p>
                        <p className='py-2 mx-8 mt-8 border '>Free guide</p>
                    </div>
                    <button className='text-blue-400 w-[200px] rounded-md font-medium my-6 mx-auto bg-black py-3 '>Buy</button>
                </div>
                <div className='flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105'>
                      <img className='w-24 mx-auto mt-[-3rem] bg-white ' src={Triple} alt="" />   
                    <h2 className='py-8 text-2xl font-bold text-center'>Premium</h2>
                    <p className='text-4xl font-bold text-center'>$400</p>
                    <div className='font-medium text-center'>
                        <p className='py-2 mx-8 mt-8 border-b '>Free Transport</p>
                        <p className='py-2 mx-8 mt-8 border '>50% Discout for Accomadation</p>
                        <p className='py-2 mx-8 mt-8 border '>Free guide</p>
                    </div>
                    <button className='text-blue-400 w-[200px] rounded-md font-medium my-6 mx-auto bg-black py-3 '>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Budget