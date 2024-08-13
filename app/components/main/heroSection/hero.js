"use client"
import { useState, useEffect } from 'react';
import { heroLinks } from '../classes';
import images from '@/db/imagesData';
import HeroOverlay from './heroOverlay';

const HeroSection = () => {
    const [hideImage, setHideImage] = useState('');

    const handleLoading = () => {
        setHideImage('hidden');
    }

    const [currentOverlay, setCurrentOverlay] = useState(1);

    useEffect(() => {
        const overlayInterval = setInterval(() => {
            setCurrentOverlay((prevOverlay) => {
                // Loop back to the first overlay after showing the third one
                if (prevOverlay === 3) {
                    return 1;
                }
                // Show the next overlay
                return prevOverlay + 1;
            });
        }, 10000); // Change overlay every 10 seconds

        return () => {
            clearInterval(overlayInterval); // Clear the interval when the component unmounts
        };
    }, []);

    return (
        <div className="relative overflow-hidden">
            <video
                preload="auto"
                autoPlay
                loop
                muted
                onLoadedData={handleLoading}
                className="w-full h-48 md:h-96 lg:h-screen object-cover"
            >
                <source src="/videos/greenacresvideo.mp4" type="video/mp4" />
            </video>
            {/* Render the current overlay based on the state */}
            {currentOverlay === 1 && (
                <HeroOverlay
                    title={"Where Dreams Take Root and Grow! 🌱"}
                    description={"Discover a place where curiosity meets creativity, where every day is an adventure of exploration, and where students embark on a journey of intellectual growth and personal discovery."}
                />
            )}
            {currentOverlay === 2 && (
                <HeroOverlay
                    title={"Where Dreams Take Root and Grow! 🌱"}
                    description={"Discover a place where curiosity meets creativity, where every day is an adventure of exploration, and where students embark on a journey of intellectual growth and personal discovery."}
                />
            )}
            {currentOverlay === 3 && (
                <HeroOverlay
                    title={"Where Dreams Take Root and Grow! 🌱"}
                    description={"Discover a place where curiosity meets creativity, where every day is an adventure of exploration, and where students embark on a journey of intellectual growth and personal discovery."}
                />
            )}
            {/* Your content on top of the video */}
            {/* <img
                src={images.classroom.image1}
                className={`${hideImage} absolute flex inset-0 w-full h-48 md:h-96 lg:h-[450px] object-cover`}
            /> */}
            {currentOverlay === 1 && (
                <HeroOverlay
                    title={"Where Dreams Take Root and Grow! 🌱"}
                    description={"Discover a place where curiosity meets creativity, where every day is an adventure of exploration, and where students embark on a journey of intellectual growth and personal discovery."}
               hide={hideImage} />
            )}
            {currentOverlay === 2 && (
                <HeroOverlay
                    title={"Where Dreams Take Root and Grow! 🌱"}
                    description={"Discover a place where curiosity meets creativity, where every day is an adventure of exploration, and where students embark on a journey of intellectual growth and personal discovery."}
                    hide={hideImage} />
            )}
            {currentOverlay === 3 && (
                <HeroOverlay
                    title={"Where Dreams Take Root and Grow! 🌱"}
                    description={"Discover a place where curiosity meets creativity, where every day is an adventure of exploration, and where students embark on a journey of intellectual growth and personal discovery."}
                    hide={hideImage} />
            )}
            <div className='justify-center w-screen text-white md:absolute md:inset-0 md:flex md:items-end'>
                <div className={`${heroLinks}`}>
                    <h1 className='font-bold'>Scholarship Facility</h1>
                    <h2 className='text-sm'>Harbour of leadership and entrepreneurship</h2>
                </div>
                <div className={`${heroLinks}`}>
                    <h1 className='font-bold'>Skilled Lecturers</h1>
                    <h2 className='text-sm'>Conducive teaching and learning environment</h2>
                </div>
                <div className={`${heroLinks}`}>
                    <h1 className='font-bold'>Modern Labs</h1>
                    <h2 className='text-sm'>Latest tools of teaching and learning facilities</h2>
                </div>
                <div className={`${heroLinks} border-none`}>
                    <h1 className='font-bold'>Sports</h1>
                    <h2 className='text-sm'>Well-equipped sports facilities</h2>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
