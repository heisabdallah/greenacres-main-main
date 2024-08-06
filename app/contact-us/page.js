import React from 'react'
import images from '@/db/imagesData'
import Image from 'next/image'
import Footer from '../components/Footer/footer'



const ContactUs = () => {
    return (
        <div >
            <div className='text-start pt-24 px-6 overflow-hidden space-y-4 md:px-20 lg:px-32'>

                <h1 className='text-5xl text-green-800 font-bold mb-12 md:mt-20'>Contact Us</h1>
                <hr />
                <div className='md:flex gap-4'>
                    <div className='md:w-1/2'>
                        <Image src={images.students.image1} width={1000} height={1000} className='h-96 object-cover' />
                    </div>
                    <hr /> <br />
                    <div className='md:w-1/2 space-y-6'>
                        <h1 className='text-2xl font-bold text-green-800 md:text-4xl'>Come Visit Us</h1>
                        <p className='md:text-lg'>Whether you are a GAS Alumni or a prospective Green Acres Students, you are welcome to visit us!. The safety and security of our community are our top priority, so please know that if you are planning to visit one of our campuses, an appointment is required.</p>
                        <div className='pt-6'>
                            <h2 className='font-bold text-xl'>Green Acres Schools</h2>
                            <p1>DSM-Green Acres School No. 33 <br></br>
                                BUNAZI - Green Acres School 12430
                            </p1>
                            <div className='flex flex-col pt-6'>
                                <p1 className="md:text-lg">Main contact for all campuses: </p1>
                                <a className='text-green-700 font-black underline' href="tel:+255715431990">+255 715 431 990</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='py-20'>
                    <h1 className='text-2xl font-black mb-2'>General Inquiries</h1>
                    <h2 className='font-medium text-md'>Find out who to contact:</h2>
                    <div className='mt-12 space-y-10'>
                        <div className='grid grid-cols-2 overflow-scroll p-4 gap-6'>
                            <h1>Are you a prospective family?</h1>
                            <h1>Contact <a className='text-green-700 font-black underline' href="mailto:jacklyne.rushaigo@gmail.com">jacklyne.rushaigo@gmail.com</a></h1>
                        </div>
                        <div className='grid grid-cols-2 overflow-scroll p-4 gap-6 none bg-slate-200'>
                            <h1>Are you a former student or employee?</h1>
                            <h1>Contact <a className='text-green-700 font-black underline' href="mailto:jacklyne.rushaigo@gmail.com">greenacresfinance@gmail.com</a></h1>
                        </div>
                        <div className='grid grid-cols-2 overflow-scroll p-4 gap-6'>
                            <h1>Are you a prospective partner, education colleague, or interested in finding out more about the school?</h1>
                            <h1>Contact <a className='text-green-700 font-black underline' href="mailto:jacklyne.rushaigo@gmail.com">greenacresfinance@gmail.com</a></h1>
                        </div>
                        <div className='grid grid-cols-2 overflow-scroll p-4 gap-6 none bg-slate-200'>
                            <h1>Are you interested in working at GAS?</h1>
                            <h1>For all open positions, please visit our <span className='font-bold text-green-700 underline'><a href='#'>Work at GAS</a></span> page
                                <span className='block pt-6'>IMPORTANT NOTE: We do not accept and will not respond to unsolicited job applications.</span></h1>
                        </div >
                        <div className='grid grid-cols-2 overflow-scroll p-4 gap-6'>
                            <p>Are you interested in using our spaces and facilities for your event?</p>
                            <p>Visit the <span className='font-bold text-green-700'>Facilities for Hire</span> page to learn more.</p>
                        </div>
                        <div className='grid grid-cols-2 overflow-scroll p-4 none bg-slate-200'>
                            <p>Are you one of our vendors?</p>
                            <p>Read the <span className='font-bold text-green-700'>GAS Vendor Code of Conduct</span> here.</p>
                        </div>
                    </div>
                    <div className='mt-20 space-y-6'>
                        <h1 className='text-2xl font-black'>Getting to Our Campuses</h1>
                        <p>Dar es Salaam is a true mega-city. Take a few minutes to map out where the GAS campus you are visiting is in relation to your location. Give yourself a generous amount of time to travel as traffic can be unpredictable.</p>
                    </div>
                    <div className="h-96 w-screen mt-8 relative overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126802.88929975862!2d39.05339664335938!3d-6.697557799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c51aa816cab41%3A0xacbf4ab9dd919bbe!2sGreen%20Acres%20Secondary%20School!5e0!3m2!1sen!2stz!4v1722865627125!5m2!1sen!2stz"
                            className="absolute w-10/12 inset-0 md:w-3/4 h-full border-0 rounded-lg overflow-hidden"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <footer className='overflow-hidden'>
                <Footer />
            </footer>
        </div>
    )
}

export default ContactUs