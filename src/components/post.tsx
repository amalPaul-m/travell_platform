import Slider from './post-slider';
import InterestedBtn from './interested-btn';
import LikeBtn from './likeBtn';
import React from 'react';

interface PostProps {
  setHomeDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const Post: React.FC<PostProps> = ({ setHomeDetails }) => {
  return (
    <div className="post-container w-100 mt-3 mb-3 border-0 border-gray-300 rounded-lg p-4 bg-white shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="post-title font-semibold text-sm flex items-center gap-2">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border"
          />
          amal_paul
        </h2>
        <span className='text-xs'>3hr ago</span>
      </div>

      <p className="post-content font-bold text-md mt-3">Ernakulam To Kashmir</p>
      <p className='text-xs font-light'>This is the brief description of the trip.</p>

      <Slider />

      <div className="flex items-center justify-between">
        <InterestedBtn setHomeDetails={setHomeDetails} />
        <LikeBtn />
      </div>
    </div>
  );
};

export default Post;
