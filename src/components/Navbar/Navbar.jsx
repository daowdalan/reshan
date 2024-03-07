"use client"
import Link from 'next/link';
import Logo from '../../elements/Logo/Logo';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'; // Update with your theme context path

const Navbar = () => {
  const { mode } = useContext(ThemeContext); // Get the current theme mode
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false); // Close the dropdown when a link is clicked
  };

  return (
    <div className={`flex justify-between items-center h-[10vh] max-w-[1240px] mx-auto ease-in-out duration-500 text-white ${mode === 'dark' ? 'dark' : 'light'}`}>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] z-30 '>RESHAN</h1>
      <div className='z-30'><DarkModeToggle/></div>
      <ul className='hidden md:flex'>
        <li className='p-4'><Link href={'/'}>Home</Link></li>
        <li className='p-4'><Link href={'/about'}>About</Link></li>
        <li className='p-4'><Link href={'/portfolio'}>Gallery</Link></li>
        <li className='p-4'><Link href={'/contact'}>Contact</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden' style={{ transition: 'top 0.5s', top: nav ? '20px' : '10px' }}>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? `md:hidden absolute top-[10vh] left-0 w-[100%] items-center ease-in-out duration-500 ${mode === 'dark' ? 'bg-[#111]' : 'bg-white'}` : 'absolute top-[-100%] left-0 w-[100%] items-center ease-in-out duration-500 z-10'}>
        <li className='p-4 text-center' onClick={closeNav}><Link href={'/'}>Home</Link></li>
        <li className='p-4 text-center' onClick={closeNav}><Link href={'/about'}>About</Link></li>
        <li className='p-4 text-center' onClick={closeNav}><Link href={'/portfolio'}>Portfolio</Link></li>
        <li className='p-4 text-center' onClick={closeNav}><Link href={'/contact'}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
