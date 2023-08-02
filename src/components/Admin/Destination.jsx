import React from 'react'
import Side from './Side'
import image from '../Image/im10.jpg'


function Destination() {const defaultProps = {
 
};


  return (
    <div className='flex'>

      <div>
         <Side/>
      </div>
      <div className=' w-[85%] bg-cover bg-no-repeat'style={{ backgroundImage: `url(${image})` }}></div>
      <div>
      
      </div>
    </div>
  )
}

export default Destination