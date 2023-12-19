import React from 'react';
import LogoNav from '../../assets/logoForm.png'
import iconPinjam from '../../assets/pinjamIcon.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as jwt_decode from 'jwt-decode';

const NavbarLog = () => {
  const onClick = () => {
    axios.delete('http://localhost:5000/logout')
      .then((res) => {
        localStorage.removeItem('token');
        window.location.href = '/';
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <nav className='bg-[#302768] sticky top-0 z-50'>
      <div className='container mx-auto px-12 flex justify-between h-[17vh]'>
        <div className="flex py-4 items-center w-[24%]">
          <img src={LogoNav} alt="" className='h-10'/>
        </div>
        <div className='flex items-center gap-6 text-white'>
          <Link to="/product" className='flex items-center gap-2'>
            <img src={iconPinjam} alt="" className='hover:fill-slate-400'/>
            <p className='body1-semibold hover:text-gray-300' href=''>Jelajah</p>
          </Link>
          <Link to="/profile1">
            <p className='body1-semibold hover:text-gray-300'>Welcome, Ghani</p>
          </Link>    
          <Button buttonColor='border-[#75319B]' bgColor='bg-[#75319B]' onClick={onClick}>Log Out</Button>
        </div>
      </div>
    </nav>
  );
};

const Button = (props) => {
  const { buttonColor, bgColor, children, onClick } = props;
  return (
    <button className={`body1-semibold rounded-md py-2 px-4 border-2 ${buttonColor} ${bgColor}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default NavbarLog;

