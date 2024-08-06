import { resPadding } from './components/main/classes';
import divider from './components/main/divider';
import images from '@/db/imagesData';
import Cards from './components/cards';
import HeroSection from './components/main/heroSection/hero';
import strings from '@/db/stringsData';
import Footer from './components/Footer/footer';


const Home = () => {

  const slides = [
    images.classroom.image1, images.classroom.image2, images.students.image1, images.students.image2, images.students.image3, images.students.image4
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
          <div className='py-8 text-sm leading-6'>
            <p>{string.p_1}</p>
            <br></br>
            <p>{string.p_1}</p>
          </div>
          {divider}
          <h1 className='py-4 pt-20 md:text-2xl lg:text-3xl text-center text-xl font-black text-green-800'>Our School Gallery</h1>
          <div className='grid gap-1 p-2 md:grid-cols-2 md:gap-2 md:p-12 lg:grid-cols-3 lg:gap-3 lg:p-20 justify-center'>
            {slides.map((i) => (
              <div key={i}>
                <img src={i} className='h-80 w-80 object-cover' />
              </div>
            )
            )}
          </div>
          {divider}
          {/* Why Choose Us Section */}
          <h1 className='py-4 pt-20 md:text-2xl lg:text-3xl text-center text-xl font-black text-green-800'>Why Choose Us?</h1>
          <div className='py-8 text-sm leading-6'>
            <p className='font-semibold text-gray-600'>At Green Acres School, we stand out for a world-class education experience that goes beyond the ordinary. Here's why you should choose us:</p>
            <br />
            <div class="p-10 rounded-lg shadow-md">
              <ul className='list-disc space-y-4'>
                <li>
                  <strong>Exceptional Teaching Team</strong>
                  <ul>
                    <li> Our dedicated and experienced educators are committed to nurturing young minds, fostering creativity, and encouraging a lifelong love for learning.</li>
                  </ul>
                </li>
                <li>
                  <strong>Modern Facilities</strong>
                  <ul>
                    <li> Our state-of-the-art facilities provide a safe and inspiring environment where students can explore, discover, and excel.</li>
                  </ul>
                </li>
                <li>
                  <strong>Comprehensive Curriculum</strong>
                  <ul>
                    <li>Our holistic curriculum is designed to develop well-rounded individuals, encompassing academics, arts, sports, and character development.</li>
                  </ul>
                </li>
                <li>
                  <strong>Community Engagement</strong>
                  <ul>
                    <li>We foster a strong sense of community, encouraging students and families to engage in various extracurricular activities and initiatives.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <br />
            <p className='font-semibold text-gray-600 pt-6'>Join us at Green Acres School and embark on a journey of education, growth, and endless possibilities. We believe in shaping tomorrow's leaders today.</p>
          </div>
          {divider}

        </div>
        <Cards />
      </main>
      <Footer />

    </>
  );
}

export default Home;
