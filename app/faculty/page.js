import Image from 'next/image';
import strings from '@/db/stringsData';
import images from '@/db/imagesData';
import { heroBanner } from '../components/main/classes';


const Faculty = () => {

  return (
    <>
                  {/* MAIN SECTION  */}
                  <main id='main' className="grid grid-rows-1 grid-cols-1 font-montserrat">

      <div className={heroBanner}>
        <Image src={images.sports.image10} width={1920} height={1282} alt='hero pic' priority='true' className='h-full w-full object-cover'/>
      </div>
        <div className='px-5 md:px-8 lg:px-20 xl:px-60'>
        <h1 className='pt-10 text-center text-2xl font-black text-green-800'>FACULTY</h1>
        <div className='py-10 text-sm'>
            <p>{strings.admission.p_1}</p>
            <br></br>
            <p>{strings.home.p_1}</p>
        </div>

        </div>
      </main>

    </>
  );
}

export default Faculty;
