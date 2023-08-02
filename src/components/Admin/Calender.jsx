import React , { useState } from 'react'
import AdminSide from './Side'
import Calendar from 'react-calendar';
import Her from '../Image/im5.jpg'

function Calender() {
    const [value, onChange] = useState(new Date());
  return (

    <div className='flex '>
       
    <div>
    <AdminSide/>
    </div>

    <div className=' w-[85%]'style={{ backgroundImage: `url(${Her})` }}>
    <div className='text-2xl text-white text-semibold' >
      <Calendar onChange={onChange} value={value} />
    </div>
    </div>
    </div>
  )
}

export default Calender