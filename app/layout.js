import './globals.css'
import { Oswald, Space_Grotesk } from 'next/font/google'
import Header from './components/header/header'
import './scroll.css'
import Script from 'next/script'

const oswald = Oswald({ weight: ["200", "300", "400", "500", "600", "700"], subsets: ['latin'] })
const space_grotesk = Space_Grotesk({ weight: ["300", "400", "500", "600", "700"], subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }} className='scroll-container'>
      
      {/* Tawk.to Script */}
      <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/66bb89580cca4f8a7a757f41/1i56910ni"
        crossOrigin="anonymous"
        async
      />

      <body className={`bg-cover bg-bottom font-space_grotesk text-base font-light text-slate-700`}>
        <header>
          <Header />
        </header>
        <main className='bg-gray-50 bg-opacity-95'>{children}</main>
      </body>
    </html>
  )
}
