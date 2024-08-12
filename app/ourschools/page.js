import Image from 'next/image';
import images from '@/db/imagesData';
import strings from '@/db/stringsData';
import { heroBanner } from '../components/main/classes';
import Footer from '../components/Footer/footer';


const OurSchools = () => {

  return (
    <>

                  {/* MAIN SECTION  */}
      <main id='main' className="grid grid-rows-1 grid-cols-1">

      <div className={heroBanner}>
          <Image src={images.classroom.image2} width={1920} height={1282} alt='hero pic' priority='true' className='h-full w-full object-cover'/>
        </div>
        <div className='px-5 md:px-8 lg:px-20 xl:px-60'>
        <h1 className='pt-10 text-center text-2xl font-black text-green-800 uppercase'>Our Schools</h1>
        <div className='py-10'>
            <p>{strings.about.p_1}</p>
            <br></br>
            <p>{strings.about.p_1}</p>
        </div>

        </div>
      </main>
      <footer>
        <Footer />
      </footer>

    </>
  );
}

export default OurSchools;
