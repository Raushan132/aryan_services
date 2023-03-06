import React, { useEffect, useState } from 'react'
import {AiFillDashboard,AiOutlineForm,AiOutlineCheckSquare,AiFillMessage,AiOutlineLogout} from 'react-icons/ai';
import {HiOutlineNewspaper} from 'react-icons/hi'
import {BsClipboardData} from 'react-icons/bs'
import {CgWebsite} from 'react-icons/cg'
import { Link } from 'react-router-dom';



const Sidebar = () => {
  
  const[hamburger,setHamburger]= useState(window.innerWidth>639)
  window.addEventListener("resize",
  ()=>{setHamburger(window.innerWidth>639)})
  
  const handleHamClick= ()=>{
    setHamburger(!hamburger)
  }

  
   

   

  

  return (
    <>
     
      
      <div className=" ">
        <div className={`fixed z-50 h-screen ${hamburger?" sm:w-1/3 lg:w-1/4 xl:w-1/6 w-full ":"w-0"} transition-all overflow-hidden  bg-gray-700 text-white`}>
          <div className="">
            <div className=" ">
            <i onClick={handleHamClick} className="fa fa-close text-red-500 text-3xl flex justify-end -translate-x-5 translate-y-2 sm:hidden" />
              <div className="flex  justify-center items-center">
                <img className='w-[100px] p-4' src="../images/Logo.png" alt="" />
                <div className="md:text-xl font-bold">Aryan Services Limited</div>
              </div>
              <hr className="w-full " />
            </div>
            
            <ul className='w-full   mt-10 '>
              <li className='w-full flex flex-col  text-md md:text-xl'>
                <Link  className="w-full px-8 py-2  md:text-start hover:bg-gray-500 flex items-center gap-2" to="/dashboard"><AiFillDashboard />Dashboard</Link >
                <Link className="w-full px-8 py-2  md:text-start hover:bg-gray-500 flex items-center gap-2" to="/application"><AiOutlineForm />Application Form</Link>
                <Link className="w-full px-8 py-2  md:text-start hover:bg-gray-500 flex items-center gap-2" to="/attendance"><AiOutlineCheckSquare />Attendance</Link>
                <a className="w-full px-8 py-2  md:text-start hover:bg-gray-500 flex items-center gap-2" href=""><HiOutlineNewspaper />Bill</a>
                <a className="w-full px-8 py-2  md:text-start hover:bg-gray-500 flex items-center gap-2" href=""><AiFillMessage />Message List</a>
                <a className="w-full px-8 py-2  md:text-start hover:bg-gray-500 flex items-center gap-2" href=""><BsClipboardData />Company Detail</a>
                <a className="w-full px-8 py-2  md:text-start hover:bg-gray-500 flex items-center gap-2" href=""><CgWebsite />Website Edit</a>
                <a className="w-full px-8 py-2  md:text-start hover:bg-gray-500 flex items-center gap-2" href=""><AiOutlineLogout/>Logout</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <i onClick={handleHamClick} className='fa-solid fa-bars translate-x-5 translate-y-5 z-50 text-3xl  sm:hidden' />
    </>
  )
}

export default Sidebar