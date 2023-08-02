import React from 'react';
import { BsBookHalf } from "react-icons/bs";
import { SlCalender} from "react-icons/sl";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineCalculator } from "react-icons/ai";
import { FaHospitalAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Side = () => {
    return (
        <div className='h-[100vh] bg-blue-400 text-white mt-[-25px] cursor-pointer'>
            <Link to='/admin'><div className='px-6 py-4 mt-6'>
                <h1 className='text-2xl font-bold '>TRAVEL ADVENTURE </h1>
            </div>
            </Link>
            <div className='flex items-center justify-between gap-4 px-6 py-2 ml-4 border-b-2 border-green-300 cursor-pointer hover:bg-blue-500'>
                <h2 className='mt-6 text-xl'><Link to='/admin/budgeplan-home'>Budget Plan</Link></h2>
                <p className='ml-10 '><BsBookHalf /></p>
            </div>
            <div className='flex items-center justify-between gap-4 px-6 py-2 ml-4 border-b-2 border-green-300 cursor-pointer hover:bg-blue-500'>
                <h2 className='mt-6 text-xl'><Link to='/admin/doctor-list'>Features</Link></h2>
                    <p className='ml-10 '><AiOutlineUserAdd /></p>
                
            </div>
            <div className='flex items-center justify-between gap-4 px-6 py-2 ml-4 border-b-2 border-green-300 cursor-pointer hover:bg-blue-500'>
                <h2 className='mt-6 text-xl'> <Link to='/admin/calender'>Calender</Link></h2>
                <p className='ml-10 '><SlCalender /></p>
            </div>
            <div className='flex items-center justify-between gap-4 px-6 py-2 ml-4 border-b-2 border-green-300 cursor-pointer hover:bg-blue-500'>
                <h2 className='mt-6 text-xl'><Link to='/admin/calculator'>Calculator</Link></h2>
                <p className='ml-10 '><AiOutlineCalculator /></p>
            </div>
            <div className='flex items-center justify-between gap-4 px-6 py-2 ml-4 border-b-2 border-green-300 cursor-pointer hover:bg-blue-500'>
                <h2 className='mt-6 text-xl'><Link to='/admin/destination'>Destination</Link></h2>
                <p className='ml-10 '><FaHospitalAlt /></p>
            </div>
            

        </div>
    )
}

export default Side