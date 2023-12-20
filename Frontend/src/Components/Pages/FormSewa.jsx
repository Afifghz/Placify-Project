import React, { useState } from 'react'
import Navbar from '../Elements/NavbarLog'
import Footer from '../Elements/Footer'
import ImgShort from '../../assets/imgShort.png'
import { Link } from 'react-router-dom'
import Input from '../Elements/Input/Input'
import axios from 'axios'

const FormSewa = () => {
      const [noTelp, setNotelp] = useState('');
      const [namaCustomer, setNamaCustomer] = useState('');
      const [jumlahTamu, setJumlahTamu] = useState('');
      const [waktuAwal, setWaktuAwal] = useState('');
      const [waktuAkhir, setWaktuAkhir] = useState('');
      const [tanggalSewa, setTglSewa] = useState('');
      const [msg, setMsg] = useState('');
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!noTelp || !waktuAwal || !waktuAkhir || !tanggalSewa || !jumlahTamu || !namaCustomer) {
          setMsg('Semua data harus diisi');
          return; 
        }
        try {
          await axios.post('http://localhost:5000/transaction', {
            namaCustomer : namaCustomer,
            jumlahTamu : jumlahTamu,
            noTelp : noTelp,
            waktuAwal :waktuAwal,
            waktuAkhir :waktuAkhir,
            tanggalSewa :tanggalSewa,
          });
          setJumlahTamu('');
          setTglSewa('');
          setWaktuAkhir('');
          setWaktuAwal('');
          setNotelp('');
          setNamaCustomer('');
          setMsg('Pendaftaran berhasil');
          const intervalId = setTimeout(() => {
            setMsg('');
          }, 3000);
          setTimeout(() => {
            clearInterval(intervalId);
          }, 4000);
          window.location.href = '/konfirmasipesanan';
          
          
        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
          }
        }
      }
  return (
    <>
        <Navbar/>
        <div className="container mx-auto px-12">
            <h1 className='text-4xl font-bold text-gray-900 mb-6 pt-4'>Formulir Sewa Tempat</h1>
        </div>
        <div className="container mx-auto px-12 flex flex-row gap-7 mb-12">
            <div className="w-3/5 rounded-md border-2 border-black p-6">
                <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name" className='text-md font-semibold text-gray-900'>Nama</label>
                <Input type="text" onChange={(e) => setNamaCustomer(e.target.value)} value={namaCustomer}/>
                <label htmlFor="name" className='text-md font-semibold text-gray-900'>NoTelp</label>
                <Input type="text" onChange={(e) => setNotelp(e.target.value)} value={noTelp}/>
                <label htmlFor="name" className='text-md font-semibold text-gray-900'>Jumlah Tamu</label>
                <Input type="text" onChange={(e) => setJumlahTamu(e.target.value)} value={jumlahTamu}/>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='text-md font-semibold text-gray-900'>Tanggal Pemakaian</label>
                        <Input type="date" onChange={(e) => setTglSewa(e.target.value)} value={tanggalSewa}/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='text-md font-semibold text-gray-900'>Waktu Awal Pemakain</label>
                        <Input type="time" onChange={(e) => setWaktuAwal(e.target.value)} value={waktuAwal}/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='text-md font-semibold text-gray-900'>Waktu Akhir Pemakaian</label>
                        <Input type="time" onChange={(e) => setWaktuAkhir(e.target.value)} value={waktuAkhir}/>
                    </div>
                    
                </div>
                <p>{msg}</p>
                <div className='flex justify-end mt-6'>
                        <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 justify-end" >
                            Lanjutkan
                        </button>
                </div>
                </form>
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