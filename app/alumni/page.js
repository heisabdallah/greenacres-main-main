import Image from 'next/image';
import { heroBanner } from '../components/main/classes';
import images from '@/db/imagesData';
import strings from '@/db/stringsData';
import Button_CTA from '../components/Button_CTA';
import Button_CTA_Bordered from '../components/Button_CTA_Bordered';
import Heading_2 from '../components/main/heading_2';
import Heading_3 from '../components/main/heading_3';
import Button_CTA_2 from '../components/Button_CTA_2'
import Footer from '../components/Footer/footer';


const Alumni = () => {

  const string = strings.alumni

  return (
    <div className='overflow-hidden'>

      {/* MAIN SECTION */}
      <main id='main' className="grid grid-rows-1 grid-cols-1 relative">

        <div className={heroBanner} style={{ position: 'relative' }}>
          <Image src={images.sports.image5} width={1920} height={1282} alt='hero pic' priority='true' className='h-full w-full object-cover' />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        </div>

        <div className='px-5 md:px-8 lg:px-20 xl:px-60 relative'>
          <h1 className='pt-10 text-start text-4xl font-bold text-green-800'>{string.title_1}</h1>
          <div className='py-10 text-md relative z-10'>
            <Heading_2 label={string.title_2} />
            <br></br>
            <p>{string.p_1}</p>
            <p>{string.p_2}</p>
            <p>{string.p_3}</p>
          </div>
          <div className='w-screen'>
            <button className='h-16 w-60 bg-green-900 font-bold text-white'>Check out Greeners News</button>
          </div>
          <div className='mt-8'>
            <Image src={images.portraits.image2} width={1000} height={1000} className='w-full h-80 object-cover' />
          </div>
          <div className='space-y-4 mt-16'>
            <Heading_2 label={string.title_3} />
            <h1 className=''>{string.p_3}</h1>
            <div className='w-full flex justify-center gap-6 overflow-hidden'>
              <Button_CTA_Bordered label={"Register Now"} />
              <Button_CTA label="Sign In" />
            </div>
            <div className='pt-14 space-y-8'>
              <Heading_2 label={string.title_4} />
              <p>{string.p_5}</p>
              <Button_CTA_2 label={"Enjoy Campus Facilities"} />
            </div>
            <div className='pt-14 space-y-8'>
              <Heading_2 label={string.title_5} />
              <p>{string.p_6}</p>
              <Button_CTA_2 label={"Request a visit"} />
            </div>
            <div className='pt-14 space-y-8'>
              <Heading_2 label={"Transcript Requests"} />
              <p>Please contact the relevant Division Office directly for all transcript requests:</p>


              <ul className='px-8' style={{ listStyleType: 'disc' }}>
                <li>
                  <h2>HighSchool: <span className='font-bold text-green-800'>greenacresfinance@gmail.com</span></h2>
                </li>
                <li>
                  <h2>Secondary School: <span className='font-bold text-green-800'>greenacresfinance@gmail.com</span></h2>
                </li>
                <li>
                  <h2>Primary School: <span className='font-bold text-green-800'>greenacresfinance@gmail.com</span></h2>
                </li>
              </ul>
            </div>
            <div className='pt-10 space-y-4'>

              <Heading_2 label={string.title_7} />
              <p>{string.p_7}</p>
              <p>{string.p_8}</p>
            </div>
            <Heading_3 label={"Contact"} />
            <p>jacklyne.rushaigo@gmail.com</p>
            <div className='grid grid-cols-3 grid-rows-1 items-center'>
              <hr />
              <Image className='w-10 h-10 place-self-center' src={images.logos.image2} width={100} height={100} />
              <hr />
            </div>
          </div>
          <div className='pt-12 space-y-6'>
            <Heading_2 label={string.title_8} />
            <Image src={images.portraits.image2} width={1000} height={1000} className='w-96 h-96 object-cover' />
            <h2 className='font-bold text-xl'>Jenipher Shigoli</h2>
            <div>
              <p className='font-bold text-slate-600'>Class of 2004</p>
              <p>Director at Arizona College</p>
            </div>
          </div>
          <div className='pt-12 space-y-6'>
            <Heading_2 label={string.title_8} />
            <Image src={images.portraits.image1} width={1000} height={1000} className='w-96 h-96 object-cover' />
            <h2 className='font-bold text-xl'>Jenipher Shigoli</h2>
            <div>
              <p className='font-bold text-slate-600'>Class of 2004</p>
              <p>Director at Arizona College</p>
            </div>
          </div>
          <div className='pt-12 space-y-6'>
            <Heading_2 label={string.title_8} />
            <Image src={images.students.image1} width={1000} height={1000} className='w-96 h-96 object-cover' />
            <h2 className='font-bold text-xl'>Jenipher Shigoli</h2>
            <div>
              <p className='font-bold text-slate-600'>Class of 2004</p>
              <p>Director at Arizona College</p>
            </div>
          </div>

          <div className='mt-12 space-y-8 flex flex-col items-center text-center'>
            <Button_CTA_Bordered label={"Load More"} />
            <div>
              <Heading_2 label={"Stay in Touch"} />
              <Heading_3 label={"Advancement Office"} />
              <p>DSM Campus</p>
              <Heading_3 label={"+255746563176"} />
            </div>
            <div>

              <Heading_2 label={"Follow us!"} />
              <p>Connect with us through our official social media platforms to stay informed of the latest GAS news, events, activities, and alumni gatherings.</p>
            </div>
            <div className='w-full flex flex-col items-center'>

            <Image className='mb-20 w-3/4 h-80 object-cover' src={images.sports.image1} width={1000} height={1000} />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>


    </div>
  );
}

export default Alumni;
