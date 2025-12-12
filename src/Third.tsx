import { useState } from 'react'
import App from './App.tsx'
import './App.css'

const Third = () => {

    const [ showLogin, setShowLogin ] = useState(false);

    if(showLogin){
        return <App />
    }

  return (
    <>
    <div className="container-body overflow-x-hidden w-full bg-white">
    <div className="flex justify-center items-center h-screen first-image">
        <div className="text-center font-light">
            <div className='font-black text-white text-2xl'>"Otta Mind</div>
            <p className="text-3xl text-black font-intro mt-25">Enjoy a seamless travell</p>
            <p className="text-5xl font-bold text-white">EXPERIANCE</p>
            <div>
                <button onClick={()=>setShowLogin(true)} className="active:scale-95 transition duration-300">
                    <p className="font-bold mt-80 mb-3 p-3 bg-cyan-500 text-white rounded-4xl w-80">
                        Get Started
                    </p>
                </button>
            </div>
        </div>
    </div>
    </div>
    </> 
  )
}

export default Third
