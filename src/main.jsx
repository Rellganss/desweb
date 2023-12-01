import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Landing from './pages/Landing.jsx'
import Register from './pages/Register.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ContactForm from './pages/ContactForm.jsx'
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
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
