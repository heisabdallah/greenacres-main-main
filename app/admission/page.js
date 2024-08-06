"use client"
import Image from 'next/image';
import AdmissionForm from '../components/admissionForm';
import images from '@/db/imagesData';
import strings from '@/db/stringsData';
import { heroBanner } from '../components/main/classes';
import Button_CTA from '../components/Button_CTA';
import Footer from '../components/Footer/footer';


const Admission = () => {

  const string = strings.admission

  return (
    <>

      {/* MAIN SECTION  */}
      <main id='main' className="grid grid-rows-1 grid-cols-1 font-montserrat">

        <div className={heroBanner} style={{ position: 'relative' }}>
          <div className='relative flex items-end w-screen h-96 text-white '>
            <Image src={images.students.image4} width={1920} height={1282} alt='hero pic' priority='true' className='absolute h-full w-full object-cover' />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-40"></div>
            <div className='absolute mb-8 space-y-4 mx-5 drop-shadow-2xl shadow-inner'>
              <hr />
              <h1 className='text-2xl pt-4 font-bold'>Inquire to Learn More</h1>
              <p className='mb-24 text-sm '>Take the first step to growing our community today!</p>
              <h3 className='mb-24 text-md font-semibold'>Inquire Now</h3>
            </div>

          </div>
        </div>
        <div className='px-5 pt-20 md:px-8 lg:px-20 xl:px-60'>
          <h1 className='pt-10 text-4xl font-black text-green-800'>{string.title_1}</h1>
          <div className='py-10'>
            <h1 className='text-5xl font-bold text-green-800 mb-4'>{string.title_2}</h1>
            <h2 className='text-xl font-bold text-green-800'>{string.title_3}</h2>
            <br></br>
            <p className=''>{string.p_1}</p>
            <br></br>
            <p className='font-bold text-lg'>{string.p_2}</p>
            <br></br>
            <p>{string.p_3}</p>
            <br></br>
            <Image src={images.classroom.image1} width={1000} height={1000} className='w-full h-48 object-cover' />
          </div>
          <div className='text-center text-xl text-slate-600 mt-12'>
            <h3>{string.p_4}</h3>
          </div>
          <div className='flex justify-center mt-8'>
            <Button_CTA label={"Inquire Now"} />
          </div>
          <div>

            <div className='relative flex items-end text-white mt-14'>
              <Image src={images.classroom.image3} width={1000} height={1000} className='w-full h-72 object-cover' />
              <div className='absolute w-full h-full hover:bg-green-800 animate-pulse animation-delay-2000 opacity-70'></div>
              <div className='absolute mb-10 space-y-2 mx-4 drop-shadow-2xl shadow-inner'>
                <h2 className='font-bold text-3xl mr-10'>A Non-Profit School</h2>
                <p className='text-base'>100% of tuition is reinvested into your child's learning experience.</p>
              </div>
            </div>

            <div className='relative flex items-end text-white mt-14'>
              <Image src={images.students.image2} width={1000} height={1000} className='w-full h-72 object-cover' />
              <div className='absolute w-full h-full hover:bg-green-800 animate-pulse animation-delay-2000 opacity-70'></div>
              <div className='absolute mb-10 space-y-2 mx-4 drop-shadow-2xl shadow-inner'>
                <h2 className='font-bold text-3xl mr-10'>Campuses Built for Learning</h2>
                <p className='text-base'>The most spacious and state of the arts campuses in Tanzania from science labs to athletic facilities.</p>
              </div>
            </div>

            <div className='relative flex items-end text-white mt-14'>
              <Image src={images.portraits.image1} width={1000} height={1000} className='w-full h-72 object-cover' />
              <div className='absolute w-full h-full hover:bg-green-800 animate-pulse animation-delay-2000 opacity-70'></div>
              <div className='absolute mb-10 space-y-2 mx-4 drop-shadow-2xl shadow-inner'>
                <h2 className='font-bold text-3xl mr-10'>Opportunities for Every Student</h2>
                <p className='text-base'>There are more than 60+ clubs, sport teams, and service learning opportunities for JIS students.</p>
              </div>
            </div>

          </div>
          <div className='text-center mt-10'>
            <a href="pdf/Registration Form - Nursery and Primary.pdf" className="download-button text-green-800 font-bold underline" download>Download FORM</a>
          </div>
          <div className='flex justify-center mt-12'>
            <AdmissionForm />
          </div>
          <div className='h-20'></div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>

    </>
  );
}

export default Admission;
