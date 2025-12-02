import { useState } from "react";

const images = [
  "/docs/images/carousel/carousel-1.svg",
  "/docs/images/carousel/carousel-2.svg",
  "/docs/images/carousel/carousel-3.svg",
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full overflow-hidden rounded-base h-56 md:h-96">

      {/* Image */}
      <img
        src={images[index]}
        className="w-full h-full object-cover transition duration-700"
        alt="slider"
      />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-3xl ${
              i === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
