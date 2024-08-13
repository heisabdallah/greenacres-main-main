import icons from '@/db/iconsData'
import Image from 'next/image'
import React from 'react'

const ImageContainer = ({image, title, description, linkTitle}) => {
  return (
    <div className=" h-96 w-80 group relative cursor-pointer items-center justify-center overflow-hidden">
            <div className="h-96 w-80 overflow-hidden">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={image} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[40%] flex-col items-start justify-end px-9 text-center transition-all duration-500 gap-6 pb-16 group-hover:translate-y-0">
              <h1 className="text-2xl font-bold text-white">{title}</h1>
              
              <p className="mb-3 text-sm font-light text-slate-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-start whitespace-pre-wrap">{description}</p>
              <div className='flex gap-2'>

              <a href='#' className="text-xs font-bold text-white text-start ">{linkTitle}</a>
              <Image src={icons.arrowRight} width={20} height={20} className='' />
              </div>

            </div>
          </div>
  )
}

export default ImageContainer