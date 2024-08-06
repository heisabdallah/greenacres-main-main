import React from 'react'

const ImageGrid = (slides) => {
    return (
        <div className='grid gap-1 p-2 md:grid-cols-2 md:gap-2 md:p-12 lg:grid-cols-3 lg:gap-3 lg:p-20'>
            {slides.map((i) => (
                <div key={i}>
                    <img src={i} className='h-80 w-80 object-cover' />
                </div>
            )
            )}
        </div>
    )
}

export default ImageGrid;