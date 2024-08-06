import Image from 'next/image';
import { heroBanner } from '../components/main/classes';
import strings from '@/db/stringsData';
import images from '@/db/imagesData';


const Newsevents = () => {

  return (
    <>

      {/* MAIN SECTION  */}
      <main id='main' className="grid grid-rows-1 grid-cols-1 font-montserrat">

        <div className={heroBanner}>
          <Image src={images.classroom.image3} width={1920} height={1282} alt='hero pic' priority='true' className='h-full w-full object-cover' />
        </div>
        <div className='px-5 md:px-8 lg:px-20 xl:px-60'>
          <h1 className='pt-10 text-start text-2xl font-black text-green-800 uppercase'>All News & Events</h1>
          <div>
            <div>
              <Image src={images.sports.image1} width={1000} height={1000} alt='' />
              <p className='font text-gray-500 text-xs'>01 July 2023</p>
            </div>
            <div>
              <h2 className='text-sm font-bold text-green-800'>"BUJUGO DAY - A Celebration of Sportsmanship and Legacy at the Sports Bonanza"</h2>
              <p className='text-sm text-gray-600'>{strings.newsNevents.p_1} <a href='/newsevents/article' className='text-green-800'>Read More</a> </p>
            </div>
          </div>

        </div>
      </main>

    </>
  );
}

export default Newsevents;
