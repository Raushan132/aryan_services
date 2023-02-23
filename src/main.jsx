import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import Admin from './Admin'
import App from './App'
import './index.css'




const location = window.location.pathname.substring(0,6);
 

location!=="/admin"? ReactDOM.createRoot(  
  document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)  :    ReactDOM.createRoot(
     document.getElementById('root')).render(
      <React.StrictMode>
    <BrowserRouter basename='/admin'>
      <Admin />
    </BrowserRouter>
  </React.StrictMode>,
     )
    
  
