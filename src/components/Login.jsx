import React, { useState} from 'react';
import Her from './Image/im3.jpg'
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/admin")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
            });

    }
    
    return (
        <div className='h-[100vh] justify-center bg-cover bg-no-repeat bg-center mt-[-75px]' style={{ backgroundImage: `url(${Her})` }}>
            <div className='w-[1100px] h-[70vh] x-auto mt-20 flex rounded-xl shadow-xl  justify-center'>
                <div className='w-[50%] ml-[60px] mt-[100px] justify-center'>
                    <h2 className='mb-4 text-4xl font-semibold text-black'>Login</h2>
                    <div className='w-[350px] h-[40px] bg-white items-center  rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Email'
                         onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className='text-xl'><AiOutlineMail/></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Password'
                         onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className='text-xl'><BsKey/></p>
                    </div>
                    <button className='bg-black text-white px-6 py-1 rounded-lg text-xl hover:text-green-500 hover:bg-white mt-[20px]'onClick={onLogin}>
                        LogIn
                    </button>
                    <p className='text-lg font-thin text-white'>you don't have an account</p>SignUp
                </div>
               
            </div>
        </div>
    )
}

export default Login