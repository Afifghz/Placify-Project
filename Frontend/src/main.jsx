import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Components/Pages/Masuk'
import RegisterPage from './Components/Pages/Daftar'
import BerandarPage from './Components/Pages/Beranda'
import BerandarLog from './Components/Pages/BerandaLog'
import JelajahPage from './Components/Pages/Jelajah'
import DtlJelajahPage from './Components/Pages/DetailJelajah'
import FormSewa from './Components/Pages/FormSewa'
import ConfirmOrder from './Components/Pages/ConfirmOrder'
import Order from './Components/Pages/Order'
import Profile1 from './Components/Pages/Profile'
import Profile2 from './Components/Pages/Profile1'
import Profile3 from './Components/Pages/Profile2'
import Profile4 from './Components/Pages/Profile3'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/register',
    element: <RegisterPage/>
  },
  {
    path: '/',
    element: <BerandarPage/>
  },
  {
    path: '/beranda',
    element: <BerandarLog/>
  },
  {
    path: '/product',
    element: <JelajahPage/>
  },
  {
    path: '/product/:id',
    element: <DtlJelajahPage/>
  },
  {
    path: '/formsewa',
    element: <FormSewa/>
  },
  {
    path: '/konfirmasipesanan',
    element: <ConfirmOrder/>
  },
  {
    path: '/order',
    element: <Order/>
  },
  {
    path: '/profile1',
    element: <Profile1/>
  },
  {
    path: '/profile2',
    element: <Profile2/>
  },
  {
    path: '/profile3',
    element: <Profile3/>
  },
  {
    path: '/profile4',
    element: <Profile4/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
