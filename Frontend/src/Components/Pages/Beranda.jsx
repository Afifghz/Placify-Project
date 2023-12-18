import React from 'react'
import Navbar from '../Elements/Navbar' 
import imgHome from '../../assets/imgHome.png'
import Banner from '../../assets/banner.png'
import Card from '../../Components/Fragments/CardProduct'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.png'
import Footer from '../Elements/Footer'


const Beranda = () => {
  return (
    <>
        <Navbar />
        <div className="container mx-auto px-12">
          <div className="flex justify-center items-center h-90">
              <img src={imgHome} alt="" className='pt-10'/>
          </div>
          <div className="flex justify-start items-start h-[80vh]">       
            <div className="flex pt-11 flex-col gap-4">
              <h1 className='text-3xl font-semibold text-gray-900'>Tempat Pilihan</h1>
              <div className="flex items-start gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <img src={Banner} alt="" className='w-full' />
        </div>
        <div className="container mx-auto px-12 flex">
        <div className="flex justify-start items-start h-[80vh]">       
            <div className="flex pt-11 flex-col gap-4">
              <h1 className='text-3xl font-semibold text-gray-900'>Rating Tertinggi</h1>
              <div className="flex items-start gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-12 flex">
          <div className="w-full">
            <h1 className='mb-1 font-bold text-3xl'>Sulit Cari Tempat Event?</h1>
            <p className='font-normal text-sm text-gray-500'>Placify hadir sebagai solusi, tinggal klik ga pakai lama</p>
          </div>
        </div>
        <div className="container mx-auto px-12 flex h-[70vh] items-center justify-center">
          <div className="w-1/2 flex items-center justify-center">
            <img src={Img2} alt="" />
          </div>
          <div className="w-1/2">
            <h1 className='mb-1 font-bold text-3xl'>Tanpa Ribet</h1>
            <p className='font-normal text-sm text-gray-500'>
              Cari dan bandingkan tempat tanpa harus datang secara langsung memberikan kemudahan dalam mencari informasi serta membandingkan berbagai lokasi atau tempat secara efisien dan praktis, tanpa perlu melakukan kunjungan langsung ke lokasi tersebut.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-12 flex h-[70vh] items-center justify-center">
          <div className="w-1/2">
            <h1 className='mb-1 font-bold text-3xl'>Dengan sekali klik</h1>
            <p className='font-normal text-sm text-gray-500'>
              Cari dan bandingkan tempat tanpa harus datang secara langsung memberikan kemudahan dalam mencari informasi serta membandingkan berbagai lokasi atau tempat secara efisien dan praktis, tanpa perlu melakukan kunjungan langsung ke lokasi tersebut.
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img src={Img3} alt="" />
          </div>
        </div>
        <div className="container mx-auto px-12 flex h-[20vh]">
          <div className="w-full flex flex-col ">
            <h1 className='mb-1 font-bold text-3xl'>Placify</h1>
            <p className='font-normal text-sm text-gray-500'>
              Integrasi yang baik terhadap proses penyewaan tempat memungkinkan untuk mencari, membandingkan, dan memesan tempat secara online.
            </p>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Beranda