import React from 'react';
import TripInterested from './tripInterested';

interface HomeDetailsProps {
  onBack: () => void;
}

const HomeDetails: React.FC<HomeDetailsProps> = ({ onBack }) => {
  return (
    <div className='post-container'>
      <button
        onClick={onBack}
        className="w-100 mb-2 mt-2 bg-white text-md text-black rounded flex items-center gap-2 p-2"
      >
        <svg 
          className="w-5 h-5 text-black" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="2" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
        </svg>
        New Posts
      </button>

      <div className="post-container w-100 mb-3 border-0 border-gray-300 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h2 className="post-title font-bold text-lg flex items-center gap-2">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover border"
            />
            Amal Paul
          </h2>
        </div>

        <p className="post-content font-bold text-2xl mt-3">Ernakulam To Kashmir</p>
        <span className='text-xs text-blue-500'>Created By 1 days ago</span>
      </div>
      
      <div className="post-container w-100 mb-3 border-0 border-gray-300 rounded-2xl ps-4 pe-4">
          <img src="/src/assets/1.png" alt="img" className='rounded-md mt-3 mb-3'/>
      </div>


      <div className="post-container w-93 m-3 border-0 border-gray-300 rounded-2xl p-5 bg-white">
        <h6 className='font-light text-md mb-2'>Breif Travell Plan</h6>
        <p className='text-xl font-semibold'>This is the brief description of the trip. This is the brief description of the trip. This is the brief description of the trip.This is the brief description of the trip.</p>
      </div>

      <div className="post-container w-93 m-3 border-0 border-gray-300 rounded-2xl p-5 bg-white">
        <h6 className='font-light text-md mb-2'>Travell Date</h6>
        <p className='text-xl font-semibold'><span className='text-md font-light'>Start From </span>19-Jan-2026 09:15 PM</p>
        <p className='text-xl font-semibold'><span className='text-md font-light'>End To </span>29-Jan-2026 10:00 PM</p>
      </div>

      <div className="post-container w-93 m-3 border-0 border-gray-300 rounded-2xl p-5 bg-white">
        <h6 className='font-light text-md mb-2'>Travelling By</h6>
        <p className='text-xl font-semibold'>Train (Ernakulam to Kashmir) - Mangala lakshadeep 2 AC (48Hr)</p>
        <p className='text-xl font-semibold'>Train (Kashmir to Ernakulam) - Kashmir TVM Special Train 2 AC (48Hr)</p>
      </div>

      <div className="post-container w-93 m-3 border-0 border-gray-300 rounded-2xl p-5 bg-white">
        <h6 className='font-light text-md mb-2'>Accomodation</h6>
        <p className='text-xl font-semibold'>3 Star Hotel, AC</p>
      </div>

      <div className="post-container w-100 mt-3 mb-3 border-0 border-gray-300 rounded-2xl ps-4 pe-4">
         <img src="/src/assets/2.jpg" alt="img" className='rounded-md mt-2 mb-3'/>
      </div>

      <div className="post-container w-93 m-3 border-0 border-gray-300 rounded-2xl p-5 bg-white">
        <h6 className='font-light text-md mb-2'>Day 1</h6>
        <p className='text-xl font-semibold'>This is the brief description of the trip.</p>
      </div>

      <div className="post-container w-93 m-3 border-0 border-gray-300 rounded-2xl p-5 bg-white">
        <h6 className='font-light text-md mb-2'>Day 2</h6>
        <p className='text-xl font-semibold'>This is the brief description of the trip.</p>
      </div>
    

    <TripInterested />
    </div>
  );
};

export default HomeDetails;
