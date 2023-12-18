import React from 'react';
import LogoNav from '../../assets/logoNav.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='bg-[#302768] sticky top-0 z-50'>
      <div className='container mx-auto flex justify-between px-12'>
        <div className="flex py-4 items-center w-[24%]">
          <img src={LogoNav} alt="" className='h-10'/>
        </div>
        <form className='max-w-sm flex items-center'>
          <div className='relative flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
            <input
              type='text'
              placeholder='Search'
              className='w-full py-1 pl-10 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600'
              style={{
                // Center vertically
                display: 'block',
                margin: 'auto',
              }}
            />
          </div>
        </form>
        <ul className='flex items-center gap-4 text-white'>
          <Link to="#">
            <a className='hover:text-gray-300' href=''>Jelajah</a>
          </Link>          
          <Link to="/login">
            <button className='rounded-md py-1 px-4 border-2 border-white'>Masuk</button>
          </Link>
          <Link to="/register">
            <button className='rounded-md bg-purple-900 py-1 px-4 border-2 border-purple-900'>Daftar</button>
          </Link>          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
