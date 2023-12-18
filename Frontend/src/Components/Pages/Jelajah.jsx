import React from 'react';
import Navbar from '../Elements/NavbarLog'
import Filter from '../Elements/Filter'
import Card from '../Fragments/CardProduct'
import Footer from '../Elements/Footer';

const Jelajah = () => {
  return (
    <>
        <Navbar/>
        <div className="w-full fixed h-[12vh] bg-white">
            <div className="container mx-auto pt-6 flex justify-between px-12">
                <h1 className='text-3xl font-semibold text-gray-900'>Temukan Tempat Pilihanmu!</h1>
                <Filter/>
            </div>
        </div>
       
        <div className="container mx-auto pt-24 pb-24 px-12 flex flex-wrap gap-4">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <Footer/>
    </>
  );
};

export default Jelajah;
