"use client"
import { resPadding } from './components/main/classes';
import divider from './components/main/divider';
import images from '@/db/imagesData';
import Cards from './components/cards';
import HeroSection from './components/main/heroSection/hero';
import strings from '@/db/stringsData';
import Footer from './components/Footer/footer';
import Image from 'next/image';
import icons from '@/db/iconsData';
import ImageContainer from './components/ImageContainer';
import CarouselSlider from './components/CarouselSlider';


import { motion } from "framer-motion"
import CarouselBasic, { CarouselCustomArrows } from './components/CarouselBasic';
import HorizontalScrollableImages from './components/HorizontalScrollableImages';


const Home = () => {

  const slides = [
    images.students.image7, images.sports.image1, images.classroom.image4, images.sports.image5, images.sports.image8, images.sports.image3
  ]

  const partners = [
    images.partners.image1,
    images.partners.image2,
    images.partners.image3,
    images.partners.image4,
    images.partners.image5,
  ]

  const string = strings.home


  return (
    <>

      {/* MAIN SECTION  */}
      <main id='main' className="grid grid-rows-1 grid-cols-1 overflow-hidden">
        {/* <div className='h-fit w-screen overflow-hidden'> */}
        <HeroSection />

        {/* </div> */}
        <div className={`${resPadding}`}>
          <h1 className='py-4 pt-20 md:text-3xl lg:text-4xl text-center text-2xl font-black uppercase text-green-800'>{string.title_1}</h1>
          <div className='py-8 leading-6 my-20'>
            <div className='w-full flex justify-center mb-10'>

              <Image src={images.logos.image1} height={100} width={100} className='w-20 h-20' />
            </div>
            <h3 className='text-base md:text-4xl px-10 md:px-20 lg:px-40 text-green-800 text-center leading-relaxed'>At GAS, we prepare students from across the globe to be best in what they aspire for and at the same time, be best for the world they live in.</h3>
            <br></br>
          </div>

          <div>
            <div className='scroll-container overflow-x-auto whitespace-nowrap space-x-6'>
              <a className='font-bold text-green-800' href='#'>Admission</a>
              <a href='#'>Campuses</a>
              <a href='#'>Academics</a>
              <a href='#'>Services</a>
            </div>
            <hr className='border-t-1 border-gray-400 mb-8'></hr>
            <div className='flex flex-col md:flex-row gap-10'>
              <h1 className='text-green-800 font-medium text-3xl md:w-1/3 '>Get to know GAS</h1>
              <p className='md:w-1/3'>GAS is more than an international school in Tanzania; it’s a community with over 25 years of history and student excellence.</p>
              <div className='flex items-center md:w-1/3 gap-2'>
                <p className='text-green-800 text-base font-medium'>Learn More</p>
                <Image src={icons.arrowRightGreen} width={20} height={20} className='' />
              </div>
            </div>
          </div>

          <HorizontalScrollableImages />

          <div className='flex flex-row'>

            <div className="flex justify-center animate-loop-scroll">
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[1]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[2]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[3]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[4]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[1]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[2]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[1]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[2]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[3]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[4]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[1]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[2]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
            </div>

            <div className="flex justify-center animate-loop-scroll" aria-hidden="true">
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[1]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[2]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[3]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[4]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[1]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[2]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[1]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[2]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[3]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[4]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[1]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
              <div className='w-40 h-40 p-10'>
                <Image
                  src={partners[2]} // or image.url if the URL is stored in the `url` property
                  alt={'Partner image'} // provide a default alt text if `alt` is not available
                  width={50}
                  height={50}
                  className="h-full w-full m-8 object-cover" // add any class names or styles you need
                />
              </div>
            </div>
          </div>


          <div className='mt-20'>
            <h1 className='text-4xl font-bold text-green-800'>Where GAS Students Go</h1>
            <div className='p-4 py-8 md:p-10 md:pl-14 md:w-3/4'>
              <p>99% of GAS graduates choose to attend University after graduation. Students are empowered to find the University that is right for them. GAS students can be found at large and small higher education universities all over the world.</p>
              <div className='flex items-center gap-2 mt-4'>
                <p className='text-green-800 text-SM font-medium'>See the full list of university acceptances</p>
                <Image src={icons.arrowRightGreen} width={20} height={20} className='' />
              </div>
            </div>
          </div>

          <CarouselBasic slides={slides} />
          <div>
          </div>

          {/* <h1 className='py-4 pt-20 md:text-2xl lg:text-3xl text-center text-xl font-black text-green-800'>Our School Gallery</h1>
          <div className='grid gap-1 p-2 md:grid-cols-2 md:gap-2 md:p-12 lg:grid-cols-3 lg:gap-3 lg:p-20 justify-center'>
            {slides.map((i) => (
              <div key={i}>
                <img src={i} className='h-80 w-80 object-cover' />
              </div>
            )
            )}
          </div> */}

          <div className='mt-20 pb-4'>
            <div className='scroll-container overflow-x-auto whitespace-nowrap space-x-6'>
              <a className='font-bold text-green-800' href='#'>Fast Facts</a>
              <a href='#'>Student Life</a>
              <a href='#'>Community</a>
              <a href='#'>Blog</a>
            </div>

            <hr className='border-t-1 border-gray-400 mb-8'></hr>

            <div className='flex flex-col md:flex-row gap-10'>
              <h1 className='text-green-800 font-bold text-3xl md:w-1/3 '>Life at GAS</h1>
              <p className='md:w-1/3'>Students at GAS love to learn, have fun, and discover new passions on our beautiful, spacious, and state-of-the-art campuses.</p>
              <div className='flex items-center md:w-1/3 gap-2'>

                <p className='text-green-800 text-base font-medium'>Learn More about</p>
                <Image src={icons.arrowRightGreen} width={20} height={20} className='' />
              </div>
            </div>
          </div>

          <HorizontalScrollableImages />

          {divider}

          <div>
            {/* <div className='space-x-6'>
              <a className='font-bold text-green-800' href='#'>Admission</a>
              <a href='#'>Campuses</a>
              <a href='#'>Academics</a>
              <a href='#'>Services</a>
            </div> */}
            {/* <hr className='border-t-1 border-gray-400 mb-8'></hr> */}
            <div className='flex flex-col md:flex-row gap-10'>
              <h1 className='text-green-800 font-bold text-3xl md:w-1/3 '>Community Voices</h1>
              <p className='md:w-1/3'>GAS is a diverse community that includes not only our students and faculty and staff, but parents and alumni too. Listen to what our community has to say about their GAS experience.</p>
              <div className='flex items-center md:w-1/3 gap-2'>

                <p className='text-green-800 text-base font-medium'>Learn More about GAS Community</p>
                <Image src={icons.arrowRightGreen} width={20} height={20} className='' />
              </div>
            </div>
          </div>

          <HorizontalScrollableImages />

          {divider}

        </div>
        {/* <Cards /> */}
      </main>
      <Footer />

    </>
  );
}

export default Home;
