import Image from "next/image";
import { useState } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";



export default function CarouselBasic({ slides }) {

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative w-full h-80 md:h-[500px] object-cover">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-80 md:h-[500px] flex-shrink-0">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-80 md:h-[500px] object-cover"
              style={{
                objectFit: 'cover', // Ensures the image covers the container
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        ))}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${i == current ? "bg-white" : "bg-gray-500"
                }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
