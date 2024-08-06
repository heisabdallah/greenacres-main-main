"use client"
import Image from 'next/image';
import AdmissionForm from '../components/admissionForm';
import images from '@/db/imagesData';
import strings from '@/db/stringsData';
import { heroBanner } from '../components/main/classes';


const Admission = () => {

  const string = strings.admission

  return (
    <>

      {/* MAIN SECTION  */}
      <main id='main' className="grid grid-rows-1 grid-cols-1 font-montserrat">

        <div className={heroBanner}>
          <div className='relative flex items-end w-screen h-[600px] text-white '>
            <Image src={images.students.image4} width={1920} height={1282} alt='hero pic' priority='true' className='absolute h-full w-full object-cover' />
            <div className='absolute mb-10 space-y-6 ml-20 drop-shadow-2xl shadow-inner'>
              <h1 className='text-4xl font-bold'>Inquire to Learn More</h1>
              <p className='mb-24 text-md font-bold'>Take the first step to growing our community today!</p>
              <h3 className='mb-24 text-md font-black'>Inquire Now</h3>
            </div>

          </div>
        </div>
        <div className='px-5 pt-20 md:px-8 lg:px-20 xl:px-60'>
          <h1 className='pt-10 text-center text-2xl font-black text-green-800'>{string.title_1}</h1>
          <div className='py-10 text-sm'>
            <h1 className='text-5xl font-black text-green-800 mb-4'>{string.title_2}</h1>
            <h2 className='text-2xl font-bold'>{string.title_3}</h2>
            <br></br>
            <p>{string.p_1}</p>
            <br></br>
            <p className='font-bold text-lg'>{string.p_2}</p>
            <br></br>
            <p>{string.p_3}</p>
            <br></br>
            <Image src={images.classroom.image1} width={1000} height={1000} className='w-2/3 h-96 object-cover p-8' />
            <p>{string.p_4}</p>
          </div>
            <button className='h-20 w-52 bg-green-900 uppercase font-bold text-white'>Inquire Now</button>
          <div>
            <div className='relative flex items-end text-white'>
              <Image src={images.classroom.image4} width={1000} height={1000} className='w-2/3 h-96 object-cover p-8' />
              <div className='absolute mb-10 space-y-6 ml-20 drop-shadow-2xl shadow-inner'>
                <h2>Title</h2>
                <p>Description</p>
              </div>
            </div>
            <div className='relative flex items-end text-white'>
              <Image src={images.classroom.image3} width={1000} height={1000} className='w-2/3 h-96 object-cover p-8' />
              <div className='absolute mb-10 space-y-6 ml-20 drop-shadow-2xl shadow-inner'>
                <h2>Title</h2>
                <p>Description</p>
              </div>
            </div>
            <div className='relative flex items-end text-white'>
              <Image src={images.classroom.image2} width={1000} height={1000} className='w-2/3 h-96 object-cover p-8' />
              <div className='absolute mb-10 space-y-6 ml-20 drop-shadow-2xl shadow-inner'>
                <h2>Title</h2>
                <p>Description</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-12'>
            <AdmissionForm />
          </div>
          <div className='h-20'></div>
        </div>
      </main>

    </>
  );
}

export default Admission;
