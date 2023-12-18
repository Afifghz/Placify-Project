import React from 'react'
import Navbar from '../Elements/NavbarLog'
import Desc from '../../assets/desc.png'
import ImgMethod from '../../assets/imgMethod.png'
import Footer from '../Elements/Footer'
const Order = () => {
  return (
    <>
        <Navbar />
        <div className="container mx-auto">
            <h1 className='text-3xl font-semibold text-gray-900 mb-6 mt-12'>Detail Pemesanan</h1>
            <img src={Desc} alt="" className='mb-6'/>
            <h1 className='text-3xl font-semibold text-gray-900 mb-6'>Metode Pembayaran</h1>
            <div className='border-2 border-gray-400 p-6 flex flex-col justify-center mb-12 rounded-md'>
                <img src={ImgMethod} alt="" />
                <div className='flex justify-end mt-6'>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-xl font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 justify-end">
                            Pesan
                        </a>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Order