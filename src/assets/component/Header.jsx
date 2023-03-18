import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom';

const Header = () => {


    const [hamburger, setHamburger] = useState(false);

    const handleHamClick = () => {
        setHamburger(!hamburger);
        // console.log(hamburger)
    }
    const handleLinkHamClick=()=>{
        setHamburger(false)
        document.body.scrollTop(0)
    }

    return (
        <>
            <div className=" sticky top-0 z-50 shadow-xl">
                <div className='bg-black '>
                    <div className="text-white flex text-[12px]  sm:text-md lg:text-lg gap-10 w-screen justify-center md:justify-end  md:-translate-x-40 lg:-translate-x-60">
                        <a href='mailto:aryanlimited@gmail.com' className=""><span>Email:</span> <span>aryanlimited@gmail.com</span> </a>
                        <a href='tel:+919431363109' className=""><span>Tel:</span> <span>+919431363109</span> </a>
                    </div>
                </div>


                <div className="bg-green-500 text-white font-bold text-lg xl:text-xl overflow-hidden">
                    <div className=" xl:p-2 lg:px-8 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:bg-[url('images/header_design2.png')] bg-cover ">
                        <div className="px-4 py-2 lg:px-0 lg:py-0 flex justify-between bg-[url('images/header_design2.png')] lg:bg-[url('')] ">
                            <div className=" flex gap-5 lg:gap-10 justify-center items-center ">
                                <div className=" "><img className='w-[80px] lg:w-[100px]' src="images/Logo.png" alt="logo" /></div>
                                <div className=''>Aryan Services Limited</div>
                            </div>

                            <div className='py-4 text-3xl lg:hidden block' onClick={handleHamClick}>
                                {!hamburger ? <i className="fa-solid fa-bars"></i> : <i className="fa fa-close text-red-500"></i>}
                            </div>
                        </div>


                        <div className="bg-gradient-to-tr from-green-500 to-green-600 ">

                            <ul className={`${hamburger ? "": "h-0"} transition flex flex-col lg:flex-row items-center   gap-5 xl:gap-10`}>
                                <li><NavLink className={({isActive})=> {return isActive?'border-b-2 border-blue-400 text-blue-500':''}} onClick={handleLinkHamClick} to="/home">Home</NavLink></li>
                                <li><NavLink className={({isActive})=> {return isActive?'border-b-2 border-blue-400 text-blue-500':''}} onClick={handleLinkHamClick} to="/services">Services</NavLink></li>
                                <li><NavLink className={({isActive})=> {return isActive?'border-b-2 border-blue-400 text-blue-500':''}} onClick={handleLinkHamClick} to="/client">Clients</NavLink></li>
                                <li><NavLink className={({isActive})=> {return isActive?'border-b-2 border-blue-400 text-blue-500':''}} onClick={handleLinkHamClick} to="/career">Career</NavLink></li>
                                <li><NavLink className={({isActive})=> {return isActive?'border-b-2 border-blue-400 text-blue-500':''}} onClick={handleLinkHamClick} to="/about">About</NavLink></li>
                                <li><NavLink className={({isActive})=> {return isActive?'border-b-2 border-blue-400 text-blue-500':''}} onClick={handleLinkHamClick} to="/contact">Contact</NavLink></li>
                                <li><NavLink className={({isActive})=> {return isActive?'border-b-2 border-blue-400 text-blue-500':''}} onClick={handleLinkHamClick} to="/Login">Login</NavLink></li>
                                
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
         


        </>
    )
}

export default Header