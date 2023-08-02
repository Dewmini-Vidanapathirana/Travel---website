import React , { useState } from 'react'
import AdminSide from './Side'
import Her from '../Image/im5.jpg'


function Calculator() {
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const calculate = () => {
        if (result === '') {
            setResult('');
        }
        else {
            try {
                setResult(eval(result).toString());
            } catch (error) {
                setResult('Error');
            }
        }

    }

    const clear = () => {
        setResult('');
    }
    return (

        <div className='flex'> 

            <div >
               <AdminSide/>
            </div>
                 
            <div className=' w-[80%]'style={{ backgroundImage: `url(${Her})` }}>
            <div className="container mx-auto mt-10 ml-10 shadow-xl max-w-[600px] hover:shadow-xl flex  justify-between">
            <div className="grid grid-cols-4 gap-2 w-[400px] h-[450px] px-5 py-10">
                <h2 className='flex items-center text-2xl font-bold text-center text-white uppercase'>Calculator</h2>
                <input type="text" className="col-span-4 p-2 text-xl text-right border border-gray-400" value={result} />
                <button className="col-span-3 p-2 bg-gray-300 hover:bg-gray-400" onClick={clear} name="clear">Clear</button>
                <button className="p-2 bg-red-500 hover:bg-red-600" onClick={calculate}>=</button>
                <button className="p-2 bg-gray-300 hover:bg-gray-400" onClick={handleClick} name="/">/</button>
                <button className="p-2 bg-gray-300 hover:bg-gray-400" onClick={handleClick} name="7">7</button>
                <button className="p-2 bg-gray-300 hover:bg-gray-400" onClick={handleClick} name="8">8</button>
                <button className="p-2 bg-gray-300 hover:bg-gray-400" onClick={handleClick} name="9">9</button>
                <button className="p-2 bg-gray-300 hover:bg-gray-400" onClick={handleClick} name="*">*</button>
                <button className="p-2 bg-gray-300 hover:bg-gray-400" onClick={handleClick} name="4">4</button>
                <button className="p-2 bg-gray-300 hover:bg-gray-400" onClick={handleClick} name="5">5</button>
                <button className="p-2 bg-gray-300 hover:bg-gray-400" onClick={handleClick} name="6">6</button>
                <button className="p-2 bg-gray-300 hover:bg-gray-400" onClick={handleClick} name="-">-</button>
                <button className="p-2 bg-gray-300 hover:bg-gray-400" onClick={handleClick} name="1">1</button>
                <button className="p-2 bg-gray-300 hover:bg-gray-400" onClick={handleClick} name="2">2</button>
                <button className="p-2 bg-gray-300 hover:bg-gray-400" onClick={handleClick} name="3">3</button>
                <button className="p-2 bg-gray-300 hover:bg-gray-400" onClick={handleClick} name="+">+</button>
                <button className="col-span-2 p-2 bg-gray-300 hover:bg-gray-400" onClick={handleClick} name="0">0</button>
                <button className="p-2 bg-gray-300 hover:bg-gray-400" onClick={handleClick} name=".">.</button>
            </div>
        </div>
            </div>
        </div>
    )
}

export default Calculator