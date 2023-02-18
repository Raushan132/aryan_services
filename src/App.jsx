import React from 'react'
import Header from './assets/component/Header'
import Footer from './assets/component/Footer'
import Service from './assets/component/services/Service'
import About from './assets/component/about/About'
import Client from './assets/component/client/Client'
import Contact from './assets/component/contact/Contact'
import Home from './assets/component/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
 

  return (
    
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Service />}/>
          <Route path="/client" element={<Client />}/>
          <Route path="/contact" element={<Contact />}/>
        
        {/* <Service /> */}
        
        {/* <Client /> */}
        {/* <Contact /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
      
    
  )
}

export default App
