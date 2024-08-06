import { useState, useEffect } from "react"


export default function Carousel({
  children: slides,
  autoSlide = true,
  autoSlideInterval = 2000,
}) {
  const [curr, setCurr] = useState(0)

  // const prev = () =>
  //     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
  setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  // const arrowLeft = '/icons/arrow-left.svg'
  // const arrowRight = '/icons/arrow-right.svg'

  return (
    <div className="flex items-center justify-center content-center overflow-hidden relative h-full">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100 }%)` }}
      >
        {slides}
      </div>

      {/* Buttons  */}

      {/* <div className="absolute inset-0 flex items-end justify-between p-4">
        <button
          onClick={prev}
          className="p-4 rounded-full shadow bg-white/70 text-gray-800 hover:bg-white"
        >
          <img src={arrowLeft} />
        </button>
        <button
          onClick={next}
          className="p-4 rounded-full shadow bg-white/70 text-gray-800 hover:bg-white"
        >
        <img src={arrowRight} />
        </button>
      </div> */}

      {/* <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
            key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div> */}
    </div>
  )
}