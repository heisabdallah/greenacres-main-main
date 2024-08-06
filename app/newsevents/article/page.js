import images from '@/db/imagesData';
import Image from 'next/image';
import React from 'react'

const Article = () => {
    return (
        <div className='pt-20 space-y-8 p-4'>
            <div>
                <hr /><br />
                <h1 className='font-bold text-green-800'>"BUJUGO DAY": A Celebration of Sportsmanship and Legacy at the Sports Bonanza</h1>
                <hr /><br />
                <p className='text-gray-500 text-sm'>01 July 2023</p>
                <br />
                <hr /><br />
            </div>
            <div className='space-y-4'>
                <Image src={images.sports.image1} width={1000} height={1000} alt='' />
                <p className='font-bold text-sm'>Another exceptional year, another memorable Buju Day! With hearts full of excitement and fields bustling with zeal, we marked our annual School Sports Bonanza – a day set aside not only to foster athletic prowess but also to commemorate the enduring legacy of our esteemed school founder.</p>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <Image className='w-80 h-60 object-cover' src={images.sports.image3} width={1000} height={1000} alt='' />
                <p className='text-gray-700 text-sm'>The clouds seemed to cheer us on too, as favorable weather graced our grand event, where numerous schools, including the renowned Mogaschools and Keland School, converged in the spirit of friendly competition and communal harmony. The essence of the day was captured in the vigorous participation and lively faces of all those in attendance.</p>
                <Image className='w-80 h-60 object-cover' src={images.sports.image3} width={1000} height={1000} alt='' />
                <p className='text-gray-700 text-sm'>As the sports bonanza commenced, a vibrant parade of athletes heralded the start of what was to be a series of intense and thrilling competitions. Teams, dressed in their school colors, radiated a contagious energy that spread throughout the stands, where students, teachers, and parents were united in their cheers.</p>
                <Image className='w-80 h-60 object-cover' src={images.sports.image3} width={1000} height={1000} alt='' />
                <p className='text-gray-700 text-sm'>Football matches were among the highlights, with each game showcasing incredible talent, teamwork, and determination. The players, ever so focused on their goal, sprinted across the lush grass, dribbling and passing with finesse, while onlookers reveled in every goal scored. But it was not only football that captivated our attention.</p>
            </div>
            <div>
                <p>Track and field events witnessed sprinters storming down the tracks with sheer speed while on-field competitors threw javelins and shot puts with remarkable strength. The badminton and basketball court pulsed with the sounds of shuttles and bouncing balls as players moved with agility and precision. Volleyball, chess, and table tennis were no less enthusiastic, as each participant put forth their best effort, adding to the day's success.

                    Sportsmanship was the unspoken hero of the day encouraging handshakes, compassionate pats on the back, and smiles in both victory and defeat marked the true triumph of our Buju Day. These acts of kindness and mutual respect encapsulated the spirit of the day and mirrored the values instilled in us by our school founder, whom we were exceptionally proud to honor.

                    As the event drew to a close, medals and trophies were awarded, not just for the first-place finishers, but in recognition of commitment, improvement, and fair play. Our founder's philosophy of engaging in sports as a means of building character and cultivating discipline shone through as everyone applauded each winner.

                    In retrospect, Buju Day was more than a mere sports meet. It was a carousel of joy, a testament to the enduring power of camaraderie, and a refreshing reminder of our founder's vision. As we immortalize these moments through photographs and shared stories, let us keep alive the fire of determination and the essence of sportsmanship. Here's to celebrating the glory of sports and the shaping of young lives!

                    Thank you to every participant, school, and supporter. Till next year, let's keep the legacy thriving and the competitions fair.

                    #SchoolSportsBonanza #HonoringOurFounder #AthleticExcellence #BujuDayCelebration</p>
            </div>
        </div>
    )
}

export default Article;