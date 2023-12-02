import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import ContactForm from './pages/ContactForm.jsx'
import DaftarFreelancer from './pages/DaftarFreelancer.jsx'
import Landing from './pages/Landing.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Register from './pages/Register.jsx'
import Tentang from './pages/Tentang.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/landing",
    element: <Landing/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/kontak",
    element: <ContactForm/>
  },
  {
    path: "/tentang",
    element: <Tentang/>
  },
  {
    // Menambahkan rute dengan parameter :index untuk ProductDetail
    path: "/ProductDetail/:index",
    element: <ProductDetail/>
  },
  {
    path: "/daftarfreelancer",
    element: <DaftarFreelancer/>
  }
]);

// Render aplikasi menggunakan RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
