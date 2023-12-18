import React from 'react'
import ProfileIcon from '../../assets/profile.png'
import NavbarLog from '../Elements/NavbarLog'
import Footer from '../Elements/Footer'
import { Link } from 'react-router-dom'
import pesanan from '../../assets/pesanan.png'

const Profile1 = () => {
  const handleButton = () => {
    localStorage.clear();
    window.location.href = '/login';
  }
  return (
    <>  
        <NavbarLog />
        <div className="bg-gray-200">
          <div className="container mx-auto py-6 flex flex-row gap-6">
            <div className="w-2/6 flex flex-col gap-8">
              <div className="bg-white h-[30vh] rounded-2xl shadow-md flex justify-center items-center gap-6">
                <img src={ProfileIcon} alt="" className='h-[20vh]'/>
                <div className="flex flex-col justify-center items-start gap-3">
                  <h2>User</h2>
                  <h2>Google</h2>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <Link to="/profile1">
                  <Buttons color="white" >Informasi Akun</Buttons>
                </Link>        
                <Buttons color="gray-300">Riwayat Pesanan</Buttons>
                <Link to="/profile3">
                  <Buttons color="white">Keamanan</Buttons>
                </Link>
                <Link to="/profile4">
                  <Buttons color="white">Pusat Bantuan dan Dukungan</Buttons>
                </Link>
                <Buttons color="white" onClick={handleButton}>Keluar/Hapus Akun</Buttons>
              </div>
            </div>
            <div className="w-4/6 flex flex-col gap-8">
                <div className="bg-white rounded-2xl shadow-md py-5 px-20">
                  <ul className="flex justify-between body1-regular text-gray-400">
                    <li className='font-extrabold text-black'>Semua</li>
                    <li>Belum Bayar</li>
                    <li>Penyewaan</li>
                    <li>Selesai</li>
                    <li>Pembatalan</li>
                  </ul>
                </div>
                <img src={pesanan} alt="" />
            </div>
          </div>
        </div>
        
        <Footer />
    </>
  )
}
const Buttons = (props) => {
  const { children, color, onClick } = props;
  return (
    <button className={`w-full bg-${color} rounded-md py-6 text-black subtitle shadow-md hover:bg-gray-300`} onClick={onClick}>
        {children}
    </button>
  )
}
export default Profile1