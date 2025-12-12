import { useState } from 'react'
import './App.css'
import Third from './Third.tsx'

const Second = () => {

    const [ showThird, setShowThird ] = useState(false);

    if(showThird){
        return <Third />
    }

  return (
    <>
    <div className="container-body overflow-x-hidden w-full bg-white">
    <div className="flex justify-center items-center h-screen first-image">
        <div className="text-center font-light">
            <div className='font-black text-white text-2xl'>"Otta Mind</div>
            <p className="text-3xl text-black font-intro mt-25">Everything Okey</p>
            <p className="text-5xl font-bold text-white">TAKE BAG</p>
            <div>
                <button onClick={()=>setShowThird(true)} className="active:scale-95 transition duration-300">
                    <p className="font-bold mt-80 mb-3 p-3 bg-cyan-500 text-white rounded-4xl w-80">
                        Next
                    </p>
                </button>
            </div>
            <div className='w-80 mt-3 text-sm font-medium text-white'>
                <p> see how we use your data inour <a href="">Privacy Policy</a>.</p>
            </div>
        </div>
    </div>
    </div>
    </> 
  )
}

export default Second
