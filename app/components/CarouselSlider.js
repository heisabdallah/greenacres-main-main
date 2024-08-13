import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import randomPics from '@/db/RandomPicsData';
import React from 'react';

function CarouselSlider() {
  const [isMounted, setIsMounted] = useState(false);
  const [isFocused, setIsFocused] = useState(0); // Initialize focused index to 0 (middle item)
  const [slider, setSlider] = useState(null); // To control the slider programmatically

  useEffect(() => {
    setIsMounted(true); // Set isMounted to true when component mounts
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: (
      <button className="slick-arrow slick-prev" aria-label="Previous" onClick={() => slider?.slickPrev()}>
        Previous
      </button>
    ),
    nextArrow: (
      <button className="slick-arrow slick-next" aria-label="Next" onClick={() => slider?.slickNext()}>
        Next
      </button>
    ),
    centerMode: true,
    initialSlide: 1,
    afterChange: (current) => {
      setIsFocused(current);
    },
  };

  return (
    <div className="w-full relative">
      <div className="relative space-y-10">
        {/* <div className="flex justify-between px-12 w-full h-20">
          <button
            className="w-16 h-16 bg-white rounded-lg drop-shadow-lg text-gray-500"
            aria-label="Previous"
            onClick={() => slider?.slickPrev()}
          >
            Prev
          </button>
          <button
            className="w-16 h-16 bg-white rounded-lg drop-shadow-lg text-gray-500"
            aria-label="Next"
            onClick={() => slider?.slickNext()}
          >
            Next
          </button>
        </div> */}

        {/* Add custom styling for Slider */}
        {isMounted && (
          <Slider {...settings} ref={(slider) => setSlider(slider)} className="slick-slider-custom">
            {randomPics.map((d, index) => (
              <div key={d.title} className="items-center">
                <div className="h-1/2 w-screen ">
                  <img src={d.image} alt="" className="h-[500px] w-[600px] object-cover" />
                </div>

                <div className={`text-container flex flex-col items-start justify-center gap-2 p-2 pt-8 mt-1 ${isFocused === index ? 'text-gray-600' : 'text-gray-200'} transition-colors duration-4000`}>
                  <p className="text-xl font-semibold">{d.title}</p>
                  {/* <p className="text-start text-sm">{d.description}</p> */}
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default CarouselSlider;
