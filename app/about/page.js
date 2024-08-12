'use client'
import { useState } from 'react';
import Image from 'next/image';
import images from '@/db/imagesData';
import strings from '@/db/stringsData';
import { heroBanner } from '../components/main/classes';
import Footer from '../components/Footer/footer';

const About = () => {
  const string = strings.about;
  
  // State to manage whether to show all paragraphs or not
  const [showAllParagraphs, setShowAllParagraphs] = useState(false);

  // Handler for "See More" button click
  const handleSeeMoreClick = () => {
    setShowAllParagraphs(true);
  };

  return (
    <>
      {/* MAIN SECTION */}
      <main id='main' className="grid grid-rows-1 grid-cols-1">
        <div className={heroBanner}>
          <Image src={images.students.image3} width={1920} height={1282} alt='hero pic' priority='true' className='h-full w-full object-cover'/>
        </div>
        <div className='px-5 md:px-8 lg:px-20 xl:px-60'>
          <h1 className='pt-10 text-center text-2xl font-black text-green-800'>{string.title_1}</h1>
          <div className='py-10'>
            <p>{string.p_1}</p>
            <br></br>
            <p>{string.p_2}</p>
            <br></br>
            <p>{string.p_3}</p>
            <br></br>
            <p>{string.p_4}</p>
            
            {/* Conditionally render paragraphs based on showAllParagraphs state */}
            {showAllParagraphs && (
              <>
              <br></br>
              <p>{string.p_5}</p>
                <br></br>
                <p>{string.p_6}</p>
                <br></br>
                <p>{string.p_7}</p>
                <br></br>
                <p>{string.p_8}</p>
                <br></br>
                <p>{string.p_9}</p>
                <br></br>
                <p>{string.p_10}</p>
                <br></br>
                <p>{string.p_11}</p>
              </>
            )}
            {/* "See More" button */}
            {!showAllParagraphs && (
              <button className="text-green-800 hover:underline focus:outline-none" onClick={handleSeeMoreClick}>
                See More
              </button>
            )}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default About;
