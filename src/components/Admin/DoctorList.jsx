import React, { useState, useEffect } from 'react'
import doctorDataService from '../../Services/DoctorService';
import { Link } from 'react-router-dom'
import { AiFillDelete,AiFillEdit } from "react-icons/ai";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import im from '../Image/im11.jpg'

const DoctorList = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        getDoctors();
    }, []);


    const getDoctors = async () => {
        const data = await doctorDataService.getAllDoctor();
        console.log(doctors);
        setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };


    const deleteHandler = async (id) => {

        await doctorDataService.deleteDoctor(id).then(() => {
            toast.success('Delete Success !', {
                position: toast.POSITION.TOP_RIGHT
            });
            getDoctors();
        })
            .catch((err) => {
                console.log(err);
            })

    };
    
    return (
        <div>
            {/* <Link to='/admin/add-doctors'><button className='px-4 py-2 mt-10 ml-8 bg-blue-400 border hover:bg-white hover:border-2-green-500'>Add Doctor</button></Link> */}
            <table class="w-[1000px] p-2 ml-14 mt-14">
                 <h1 className='text-4xl font-bold'>Travel Budget</h1>
                 {<img className='mt-10 w-[60%]  flex justify-between ' src={im} alt="" />}

                        
                       
                    <tbody className='text-center'>
                    {doctors.map((doc, index) => {
                        return (
                            <tr key={doc.id} className='items-center p-4 text-xl border-b-[1px]  border-blue-500 hover:bg-gray-400'>
                                <td className='px-4 py-2 text-left'>{doc.tripname}</td>
                                <td className='px-4 py-2 text-left'>{doc.startdate}</td>
                                <td className='px-4 py-2 text-left'>{doc.enddate}</td>
                                <td className='px-4 py-2 text-left'>{doc.balance}</td>
                                <td className='px-4 py-2 text-left'>
                                <div className='flex gap-2 ml-8 text-xl cursor-pointer'>
                                    <AiFillDelete  className='hover:bg-blue-500' onClick={(e) => deleteHandler(doc.id)}/>
                                        <AiFillEdit className='hover:bg-green-500' />
                                    </div>

                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
        </div>
    )
}

export default DoctorList