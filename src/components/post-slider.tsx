import { useState, useRef } from "react";
import Image1 from "../assets/1.png";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";

const images = [Image1, Image2, Image3];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };


  const handleTouchMove = (e: React.TouchEvent) => {
    endX.current = e.touches[0].clientX;
  };


  const handleTouchEnd = () => {
    const difference = startX.current - endX.current;

    if (difference > 50 && index < images.length - 1) {
      setIndex(index + 1); 
    } 
    else if (difference < -50 && index > 0) {
      setIndex(index - 1); 
    }
  };

  return (
    <div
      className="relative mt-3 w-full overflow-hidden h-56 md:h-96 rounded-lg"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >


      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full h-full object-cover"
            alt={`slide-${i}`}
          />
        ))}
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-white/70 px-3 py-1 rounded-full">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "bg-black scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
