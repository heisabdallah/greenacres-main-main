import React from 'react'
import ImageContainer from './ImageContainer'
import images from '@/db/imagesData'
import '../scroll.css'


const HorizontalScrollableImages = () => {
    return (
        <div className="scroll-container overflow-x-auto whitespace-nowrap mt-16 py-4">
            <div className="inline-flex space-x-0 ">
                <ImageContainer
                    image={images.portraits.image1}
                    title="Visit GAS"
                    description="The best way to learn about our school is to experience it for yourself! Schedule a tour with our Admissions Office today."
                    linkTitle="Schedule a Tour Today"
                />
                <ImageContainer
                    image={images.classroom.image2}
                    title="Say Hello"
                    description="Speak with a member of our Admissions Office and take the first step to joining GAS!"
                    linkTitle="Take the first step"
                />
                <ImageContainer
                    image={images.classroom.image3}
                    title="Apply Today"
                    description="Do you already know that GAS is the right school for your family? Apply today!"
                    linkTitle="Start or Complete your Application"
                />
                <ImageContainer
                    image={images.students.image1}
                    title="FAQs"
                    description="Do you have a question? It might be answered in our Frequently Asked Questions."
                    linkTitle="See our FAQs"
                />
            </div>
        </div>
    )
}

export default HorizontalScrollableImages