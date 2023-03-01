import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import Admin from './Admin'
import App from './App'
import './index.css'



const location = window.location.pathname.substring(0,6);


const isAdmin= ()=>{
  
  return location !== "/admin"; 
}

 
const handleRoot=(Comp)=>{
  
   ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter basename={isAdmin()?"":"/admin"}>
        <Comp />
      </BrowserRouter>
    </React.StrictMode>,
  )
}


isAdmin()?handleRoot(App) :handleRoot(Admin)



    
  
