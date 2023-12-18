import React from 'react'
import Navbar from '../Elements/NavbarLog'
import Footer from '../Elements/Footer'
import ImgShort from '../../assets/imgShort.png'
import { Link } from 'react-router-dom'

const FormSewa = () => {
  return (
    <>
        <Navbar/>
        <div className="container mx-auto px-12">
            <h1 className='text-4xl font-bold text-gray-900 mb-6 pt-4'>Formulir Sewa Tempat</h1>
        </div>
        <div className="container mx-auto px-12 flex flex-row gap-7 mb-12">
            <div className="w-3/5 rounded-md border-2 border-black p-6">
                <label htmlFor="name" className='text-md font-semibold text-gray-900'>Nama Lengkap</label>
                <input type="text" placeholder="Masukkan Nama Lengkap" id="name" className="mt-2 mb-2 w-full border-2 border-gray-300 rounded-md p-2 placeholder-gray-500 text-gray-900 focus:border-purple-500 focus:outline-none"/>
                <label htmlFor="name" className='text-md font-semibold text-gray-900'>Nomor Ponsel</label>
                <input type="text" placeholder="08xxxxxxx" id="name" className="mt-2 mb-2 w-full border-2 border-gray-300 rounded-md p-2 placeholder-gray-500 text-gray-900 focus:border-purple-500 focus:outline-none"/>
                <label htmlFor="name" className='text-md font-semibold text-gray-900'>Email</label>
                <input type="email" placeholder="npm@ac.id" id="name" className="mt-2 mb-2 w-full border-2 border-gray-300 rounded-md p-2 placeholder-gray-500 text-gray-900 focus:border-purple-500 focus:outline-none"/>
                <label htmlFor="name" className='text-md font-semibold text-gray-900'>Jumlah Tamu</label>
                <input type="number" placeholder="Masukkan jumlah tamu" id="name" className="mt-2 mb-2 w-full border-2 border-gray-300 rounded-md p-2 placeholder-gray-500 text-gray-900 focus:border-purple-500 focus:outline-none"/>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='text-md font-semibold text-gray-900'>Tanggal Pemakaian</label>
                        <input type="date" placeholder="Masukkan jumlah tamu" id="name" className="mt-2 mb-2 w-full border-2 border-gray-300 rounded-md p-2 placeholder-gray-500 text-gray-900 focus:border-purple-500 focus:outline-none"/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='text-md font-semibold text-gray-900'>Waktu Awal Pemakain</label>
                        <input type="time" placeholder="Masukkan jumlah tamu" id="name" className="mt-2 mb-2 w-full border-2 border-gray-300 rounded-md p-2 placeholder-gray-500 text-gray-900 focus:border-purple-500 focus:outline-none"/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='text-md font-semibold text-gray-900'>Waktu Akhir Pemakaian</label>
                        <input type="time" placeholder="Masukkan jumlah tamu" id="name" className="mt-2 mb-2 w-full border-2 border-gray-300 rounded-md p-2 placeholder-gray-500 text-gray-900 focus:border-purple-500 focus:outline-none"/>
                    </div>
                </div>
                <div className='flex justify-end mt-6'>
                    <Link to="/konfirmasipesanan">
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 justify-end">
                            Lanjutkan
                        </a>
                    </Link>
                </div>
            </div>
            <div className="w-2/5 rounded-md border-2 border-black p-6 h-[30vh]" >
                <div className="flex justify-center items-center gap-10 mb-5">
                    <img src={ImgShort} alt="" />
                    <h1 className='text-xl font-bold text-gray-900 mb-6 pt-4'>Tema & Cafe Space</h1>
                </div>
                <hr className='bg-gray-300 h-[3px] mb-3'/>
                <p className=" flex justify-end text-2xl text-purple-700 font-bold mb-2">Rp500.000</p>
            </div>
            
        </div>
        <Footer/>
    </>
  )
}

export default FormSewa