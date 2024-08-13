"use client"
import Image from 'next/image';
import Link from 'next/link';
import { _openNav, _closeNav, _openMenuIcon, _closeMenuIcon } from './nav_classes'
import { useState } from 'react';
import images from '@/db/imagesData';

const Header = () => {

  // Use Navigation
  const openNav = _openNav;
  const closeNav = _closeNav;
  const [nav, setNav] = useState(closeNav);

  const openMenuIcon = _openMenuIcon
  const closeMenuIcon = _closeMenuIcon
  const [menuIcon, setMenuIcon] = useState(openMenuIcon)

  const toggleMenu = () => {
    if (nav === closeNav) {
      setNav(openNav);
      setMenuIcon(closeMenuIcon);
    } else {
      setNav(closeNav);
      setMenuIcon(openMenuIcon);
    }
  };

  const closeSideNav = () => {
    setNav(closeNav);
    setMenuIcon(openMenuIcon);
  };


  return (

    <div className='fixed w-full z-50 uppercase'>
      <div className='flex justify-between h-16 bg-white items-center md:hidden '>
        <Link href='/'><Image src={images.logos.image1} width='40' height='40' alt='green acres schools logo' priority='true' className='inline-block mr-2 p-1 ml-2' /></Link>
        <h3 className='inline-block text-green-900 font-semibold '>GREEN ACRES SCHOOLS</h3>
        <Image src={menuIcon} width='40' height='40' alt='menu navigation' className='inline-block mr-4 w-6' onClick={toggleMenu} priority='true' />
      </div>
      {/* Mobile Navigation  */}
      <div className={nav}>
        <nav className=' text-white text-center'>
          <ul className='text-sm py-8 space-y-20'>
            <Link href='/' className='cursor-pointer'><li className='p-4 px-8 hover:bg-white hover:text-green-950' onClick={closeSideNav}>Home</li></Link>
            <Link href='/about' className='cursor-pointer'><li className='p-4 px-8 hover:bg-white hover:text-green-950' onClick={closeSideNav}>About</li></Link>
            <Link href='/admission' className='cursor-pointer'><li className='p-4 px-8 hover:bg-white hover:text-green-950' onClick={closeSideNav}>Admission</li></Link>
            <Link href='/ourschools' className='cursor-pointer'><li className='p-4 px-8 hover:bg-white hover:text-green-950' onClick={closeSideNav}>Academics</li></Link>
            <Link href='/gallery' className='cursor-pointer'><li className='p-4 px-8 hover:bg-white hover:text-green-950' onClick={closeSideNav}>Activities</li></Link>
            <Link href='/faculty' className='cursor-pointer'><li className='p-4 px-8 hover:bg-white hover:text-green-950' onClick={closeSideNav}>Community</li></Link>
          </ul>
        </nav>
        <nav className='bg-white text-black text-center'>
          <ul className='text-sm py-2 space-y-8'>
            <Link href='/newsevents' className='cursor-pointer'><li className='p-4 px-8 hover:bg-green-950 hover:text-white' onClick={closeSideNav}>News & Events</li></Link>
            <Link href='/alumni' className='cursor-pointer'><li className='p-4 px-8 hover:bg-green-950 hover:text-white' onClick={closeSideNav}>Alumni</li></Link>
          </ul>
        </nav>
      </div>

      {/* Desktop Navigation  */}
      <div className='text-xs hidden md:flex justify-between items-center bg-gray-50 px-8 h-8 lg:px-24 xl:px-40'>
        <div className='flex space-x-2 lowercase text-green-900 whitespace-nowrap font-poppins'>
          <div className='flex items-center cursor-pointer'>
            <img className='w-4 h-4' src='icons/call.svg' />
            <a href="tel:+255686724390" className="flex hover:text-green-700">+255-686-724-390</a>
          </div>
          <div className='flex items-center cursor-pointer'>
            <img className='w-4 h-4' src='icons/email.svg' />
            <a href="mailto:info@greenacres.co.tz" className="hover:text-green-700">info@greenacres.co.tz</a>
          </div>
        </div>
        <nav className='flex items-center'>
          <ul className='flex space-x-4 capitalize whitespace-nowrap'>
            <li className='cursor-pointer w-4 h-4'><Link href='https://instagram.com/' target='_blank'><img src='icons/Instagram.svg' /></Link></li>
            <li className='cursor-pointer w-4 h-4'><Link href='https://twitter.com/' target='_blank'><img src='icons/Tumblr.svg' /></Link></li>
            <li className='cursor-pointer w-4 h-4'><Link href='https://facebook.com/' target='_blank'><img src='icons/Facebook.svg' /></Link></li>
            <li className='cursor-pointer hover:text-yellow-400'><Link href='/'>Home</Link></li>
            <li className='cursor-pointer hover:text-green-900'><Link href='/newsevents'>News & Events</Link></li>
            <li className='cursor-pointer hover:text-green-900'><Link href='/alumni'>Alumni</Link></li>
          </ul>
        </nav>
      </div>
      <div className='hidden md:flex h-14 items-center justify-between text-center bg-green-800 text-white font-md px-8 lg:px-20 xl:px-40'>
        <Link href='/'>
          <div className='flex items-center justify-center'>
            <Image src='/images/ga.png' width='40' height='40' alt='green acres schools logo' priority='true' className='mr-2' />
            <h3 className='hidden whitespace-nowrap lg:block text-sm'>GREEN ACRES SCHOOLS</h3>
          </div>
        </Link>

        <nav className='flex items-center'>
          <ul className='flex space-x-4 text-sm xl:space-x-8 items-center whitespace-nowrap'>
            <li className='cursor-pointer hover:text-yellow-400'><Link href='/about'>About</Link></li>
            <li className='cursor-pointer hover:text-yellow-400'><Link href='/admission'>Admission</Link></li>
            <li className='cursor-pointer hover:text-yellow-400'><Link href='/ourschools'>Academics</Link></li>
            <li className='cursor-pointer hover:text-yellow-400'><Link href='/gallery'>Activities</Link></li>
            <li className='cursor-pointer hover:text-yellow-400'><Link href='/faculty'>Community</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
