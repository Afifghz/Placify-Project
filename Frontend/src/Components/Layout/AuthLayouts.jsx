import React from 'react'
import { Link } from 'react-router-dom'
import Image1 from '../../assets/img1.png'
const AuthLayouts = (props) => {
    const { children, title, type } = props
  return (
    <>
        <div className="flex justify-center h-screen">
            <div className="container flex gap-2">
                <div className="flex w-1/2 justify-center items-center flex-col gap-2">
                    <img src={Image1} alt="" className='h-3/5'/>
                    <h1 className='text-center'>Cari Tempat Ga Pake Lama <br />Langsung di <span className='text-purple-500'>Placify</span></h1>
                    <p className='body2-regular text-gray-500'>Kunjungi platform sekarang dan dapatkan kemudahannya</p>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <div className="w-5/6 h-5/6 shadow-xl rounded-xl flex flex-col items-center pt-16">
                        <h1 className='text-center'>{ title }</h1>
                        <p className='body1-regular text-gray-500 text-center'>Silakan isikan data diri Anda</p>
                        { children }
                        <Navigation type={type} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
const Navigation = ({type}) => {
    if (type === "login") {
        return(
            <p className='text-center body2-regular text-gray-500 mt-2'>
                Belum punya akun? 
                <Link to='/register'>
                    <span className='text-purple-500 body2-semibold'> Daftar</span>
                </Link>
            </p>
            
        );
    }else{
        return(
            <p className='text-center body2-regular text-gray-500 mt-2'>
                Sudah punya akun?  
                <Link to='/login'>
                    <span className='text-purple-500 body2-semibold'> Masuk</span>
                </Link>
            </p>
        );
    }
}
export default AuthLayouts