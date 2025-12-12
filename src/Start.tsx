import { useState } from 'react'
import './App.css'
import Second from './Second.tsx'

const Start = () => {

    const [ showSecond, setShowSecond ] = useState(false);

    if(showSecond){
        return <Second />
    }

  return (
    <>
    <div className="container-body overflow-x-hidden w-full bg-white">
    <div className="flex justify-center items-center h-screen first-image">
        <div className="text-center font-light">
            <div className='font-black text-white text-2xl'>"Otta Mind</div>
            <p className="text-3xl text-black font-intro mt-25">Start Your Next</p>
            <p className="text-5xl font-bold text-white">ADVENTURE</p>
            <div>
                <button onClick={()=>setShowSecond(true)} className="active:scale-95 transition duration-300">
                    <p className="font-bold mt-80 mb-3 p-3 bg-cyan-500 text-white rounded-4xl w-80">
                        Next
                    </p>
                </button>
            </div>
            <div className='w-80 mt-3 text-sm font-medium text-white'>
                <p>By signing up, you agree to our <a href="">Terms.</a></p>
            </div>
        </div>
    </div>
    </div>
    </> 
  )
}

export default Start
