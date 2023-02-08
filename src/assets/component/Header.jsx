import React, { useState } from 'react'

const Header = () => {


    const [hamburger, setHamburger] = useState(false);

    const handleHamClick = () => {
        setHamburger(!hamburger);
        console.log(hamburger)
    }

    return (
        <>
            <div className=" sticky top-0 z-50 shadow-xl">
                <div className='bg-black '>
                    <div className="text-white flex text-sm  sm:text-md gap-10 w-screen justify-end -translate-x-20 md:-translate-x-40 lg:-translate-x-60">
                        <a href='mailto:aryanlimited@gmail.com' className=""><span>Email:</span> <span>aryanlimited@gmail.com</span> </a>
                        <a href='tel:+919431363109' className=""><span>Tel:</span> <span>+919431363109</span> </a>
                    </div>
                </div>


                <div className="bg-green-500 text-white font-bold text-lg xl:text-xl overflow-hidden">
                    <div className=" xl:p-2 lg:px-8 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:bg-[url('images/header_design2.png')] bg-cover ">
                        <div className="px-4 py-2 lg:px-0 lg:py-0 flex justify-between bg-[url('images/header_design2.png')] lg:bg-[url('')] ">
                            <div className=" flex gap-5 lg:gap-10 justify-center items-center ">
                                <div className=" "><img className='w-[80px] lg:w-[100px]' src="images/Logo.png" alt="logo" /></div>
                                <div className=''>Aryan Service Limited</div>
                            </div>

                            <div className='py-4 text-3xl lg:hidden block' onClick={handleHamClick}>
                                {!hamburger ? <i className="fa-solid fa-bars"></i> : <i className="fa fa-close text-red-500"></i>}
                            </div>
                        </div>


                        <div className="bg-green-500">

                            <ul className={`${hamburger ? "": "h-0"} transition flex flex-col lg:flex-row items-center   gap-5 xl:gap-10`}>
                                <li><a href="">Home</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">Clients</a></li>
                                <li><a href="">Arcade</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Login</a></li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>


        </>
    )
}

export default Header