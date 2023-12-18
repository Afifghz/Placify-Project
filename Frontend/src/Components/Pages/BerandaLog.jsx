import React, { useState, useEffect } from 'react'
import NavbarLog from '../Elements/NavbarLog' 
import imgHome from '../../assets/imgHome.png'
import Banner from '../../assets/banner.png'
import Card from '../Fragments/CardProduct'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.png'
import Footer from '../Elements/Footer'
import axios from 'axios'



const BerandaLog = () => {
  
  return (
    <>
        <NavbarLog />
        <div className="container mx-auto px-12">
          <HeroSection />
          <ReviewSection />
        </div>
        <div className="flex">
          <img src={Banner} alt=""/>
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

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-center items-center h-90">
          <img src={imgHome} alt="" className='pt-10'/>
      </div>
    </>
  )
}

const ReviewSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/products');
    setProducts(response.data);
  }
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return(
    <>
      <div className="flex justify-start items-start h-[80vh]">       
        <div className="flex pt-11 flex-col gap-4">
          <h2 className="text-gray-900">Tempat Pilihan</h2>
          <div className="flex items-start gap-4">
            {products.map((product) => (
              <Card key={product.id}>
                <Card.Header image={product.url}></Card.Header>
                <Card.Body title={product.title} place={product.place}></Card.Body>
                <Card.Footer price={formatPrice(product.price)}></Card.Footer>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default BerandaLog