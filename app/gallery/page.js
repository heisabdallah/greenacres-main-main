import Image from 'next/image';
import images from '@/db/imagesData';
import { heroBanner } from '../components/main/classes';



const Gallery = () => {
 
      const slides = [
        images.classroom.image1, images.classroom.image2, images.classroom.image3, images.classroom.image4, images.students.image5, images.students.image1
      ]


  return (
    <>

                  {/* MAIN SECTION  */}
      <main id='main' className="grid grid-rows-1 grid-cols-1 font-montserrat">

      <div className={heroBanner}>
              <Image src={images.students.image3} width={1920} height={1282} alt='hero pic' priority='true' className='h-full w-full object-cover'/>
            </div>
              <div className='px-5 md:px-8 lg:px-20 xl:px-60'>
              <h1 className='pt-10 text-center text-2xl font-black text-green-800 uppercase'>Gallery</h1>
              <div className='grid gap-1 p-2 md:grid-cols-2 md:gap-2 md:p-12 lg:grid-cols-3 lg:gap-3 lg:p-20'>
                  {slides.map((i) => (
                    <div key={i}> 
                      <img src={i} className='h-80 w-80 object-cover' />
                    </div>
                    )
                  )}
                </div>

        </div>
      </main>

    </>
  );
}

export default Gallery;
