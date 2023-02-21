import React from 'react'
import Header from './assets/component/Header'
import Footer from './assets/component/Footer'
import Service from './assets/component/services/Service'
import About from './assets/component/about/About'
import Client from './assets/component/client/Client'
import Contact from './assets/component/contact/Contact'
import Home from './assets/component/home/Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Career from './assets/component/career/Career'
import Login from './assets/component/login/Login'
import Error from './assets/component/error/Error'



function App() {
 

  return (
    
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/" element={<Navigate to="/home" />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Service />}/>
          <Route path="/career" element={<Career />}/>
          <Route path="/client" element={<Client />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
      
    
  )
}

export default App
