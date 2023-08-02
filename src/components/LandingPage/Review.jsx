import React from 'react';
import Scan from '../Image/th.png';
import Scn from '../Image/th.png';
import Con from '../Image/th.png';
import { AiOutlineStar} from "react-icons/ai";


const Review = () => {
    return (
        <div className='w-[100%] mt-10 h-screen '>
            <h1 className='text-black text-5xl font-semibold mx-auto text-center pt-4  w-[30%] mb-8'>Review</h1>
            <div className='w-[80%] flex justify-between mx-auto'>
                <div className='p-4 mr-4 rounded-md shadow-lg h-[425px] bg-green-50 hover:shadow-2xl'>
                    <h2 className='p-4 text-2xl text-center text-black font-semi bold'> Walter White</h2>
                    <img className='flex justify-center w-20 ml-32' src={Scan} alt="" />
                    <p className='px-5 py-4 mt-4 font-sans font-thin text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem aliquid natus
                        ab eum eveniet a excepturi doloribus nam quaerat accusantium, est odio velit officia
                        perferendis vero sed ipsa quos.</p>
                        <div className='flex justify-center item-center'>
                        <p className='ml-1 text-3xl text-center text-yellow-600'>< AiOutlineStar/></p>
                        <p className='ml-1 text-3xl text-center text-yellow-600'>< AiOutlineStar/></p>
                        <p className='ml-1 text-3xl text-center text-yellow-600'>< AiOutlineStar/></p>
                        <p className='ml-1 text-3xl text-center text-yellow-600'>< AiOutlineStar/></p>
                        <p className='ml-1 text-3xl text-center text-yellow-600'>< AiOutlineStar/></p>
                        </div>
                        
                       
                        </div>
                        
                <div className='mr-4 rounded-md shadow-lg bg-green-50 hover:shadow-2xl'>
                    <h2 className='p-4 text-2xl text-center text-black font-semi bold'>Sarah Jhonson</h2>
                    <img className='flex justify-center w-20 ml-32' src={Scn} alt="" />
                    <p className='px-5 py-4 mt-4 font-sans font-thin text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem aliquid natus
                        ab eum eveniet a excepturi doloribus nam quaerat accusantium, est odio velit officia
                        perferendis vero sed ipsa quos .</p>
                        <div className='flex justify-center item-center'>
                        <p className='ml-1 text-3xl text-center text-yellow-600'>< AiOutlineStar/></p>
                        <p className='ml-1 text-3xl text-center text-yellow-600'>< AiOutlineStar/></p>
                        <p className='ml-1 text-3xl text-center text-yellow-600'>< AiOutlineStar/></p>
                        <p className='ml-1 text-3xl text-center text-yellow-600'>< AiOutlineStar/></p>
                        <p className='ml-1 text-3xl text-center text-yellow-600'>< AiOutlineStar/></p>
                        </div>
                </div>

                <div className='p-4 mr-4 rounded-md shadow-lg bg-green-50 hover:shadow-2xl'>
                    <h2 className='p-4 text-2xl text-center text-black font-semi bold'>William  Anderson</h2>
                    <img className='flex justify-center w-20 ml-32' src={Con} alt="" />
                    <p className='px-5 py-4 mt-4 font-sans font-thin text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem aliquid natus
                        ab eum eveniet a excepturi doloribus nam quaerat accusantium, est odio velit officia
                        perferendis vero sed ipsa quos.</p>
                        <div className='flex justify-center item-center'>
                        <p className='ml-1 text-3xl text-center text-yellow-600'>< AiOutlineStar/></p>
                        <p className='ml-1 text-3xl text-center text-yellow-600'>< AiOutlineStar/></p>
                        <p className='ml-1 text-3xl text-center text-yellow-600'>< AiOutlineStar/></p>
                        <p className='ml-1 text-3xl text-center text-yellow-600'>< AiOutlineStar/></p>
                        <p className='ml-1 text-3xl text-center text-yellow-600'>< AiOutlineStar/></p>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Review