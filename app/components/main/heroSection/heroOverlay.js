
const HeroOverlay = ({ title, description, hide }) => {


    return (
        <>
        <div className={`${hide} absolute flex inset-0 text-gray-50 bg-green-950 rounded-sm bg-opacity-25 items-center justify-center w-full p-8 lg:p-12 h-48 md:h-96 lg:h-screen object-cover`}>
            <h1 className='text-sm font-bold lg:text-2xl md:font-black mb-10 md:mb-32 text-center animate-slide_from_right'>{title}</h1>
        </div>
        <div className={`${hide} absolute flex inset-0 text-gray-100 items-center justify-center w-full p-8 lg:p-12 h-48 md:h-96 lg:h-screen object-cover`}>
            <h2 className='text-xs md:text-sm lg:text-base text-center mt-10 md:mt-0 md:mb-10 leading-3 animate-slide_from_right animation-delay-150'>{description}</h2>
        </div> 
    </>
    )
}
export default HeroOverlay;


