import './globals.css'
import { Oswald, Space_Grotesk } from 'next/font/google'
import Header from './components/header/header'
// import Footer from './components/Footer/footer'


const oswald = Oswald({ weight: ["200", "300", "400", "500", "600", "700"], subsets: ['latin'] })
const space_grotesk = Space_Grotesk({ weight: ["300", "400", "500", "600", "700"], subsets: ['latin'] })
// const poppins = Poppins({ weight: ["300", "400", "500", "600", "700", "800", "900"], subsets: ['latin'] })


export default function RootLayout({ children }) {

  return (
    <html lang="en" style={{scrollBehavior: 'smooth'}} >
      <body className={`bg-cover bg-bottom font-space_grotesk text-base font-light text-slate-700`} >
      {/* <body className={`bg-[url('/images/backgrounds/bg1.jpg')] bg-cover bg-bottom font-poppins text-gray-700 ${poppins.variable}`} > */}
        <header>
          <Header />
        </header>
        <main className='bg-gray-50 bg-opacity-95'>{children}</main>
        
      </body>
    </html>
  )
}
