import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])


    return (
        <>

            <div className="flex flex-col items-start  p-16 bg-[url('images/contact_banner.webp')] bg-[length:100%_80%] bg-no-repeat lg:bg-[length:100%_100%]" >
            <div className=" text-xl md:text-2xl lg:3xl xl:text-4xl xl:translate-x-72 p-8 text-green-400 drop-shadow-md font-extrabold">Contact  <span className='text-red-400'>Us</span></div>
          </div>
            <div className="w-full overflow-hidden  md:p-16 p-4">


                <div  className="flex flex-col items-center mb-16" >
                    <div className=" text-lg md:text-xl lg:text-2xl p-8 text-indigo-300 font-extrabold">If need any info, please <span className='text-red-400'>contact us! </span></div>

                </div>

                <div className="">

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mx-16 ">
                        <div className="">
                            <div className="text-xl font-bold">Head Office Address:</div>
                            <div className="flex  gap-3">
                                <i className="text-red-400 translate-y-2 fa-solid fa-location-dot" />
                                <div className=" md:w-full">Aryan Services Limited, Vijay Bhawan, 2nd Floor, Radium Road, Ashok Path, Ranchi 834001</div>
                            </div>
                        </div>

                        <div className="">
                            <div className="text-xl font-bold">Mail For Information:</div>
                            <div className="flex items-center gap-3">
                                <i className="text-red-400 fa-solid fa-envelope"></i>
                                <a href="mailto:aryanlimited@gmail.com" className="">aryanlimited@gmail.com</a>
                            </div>
                        </div>

                        <div className="">

                            <div className="text-xl font-bold">Call For Help:</div>

                            <div className="flex items-center gap-3">
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+919431363109" className="">(+91) 94313 63109</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <i className=" fa-solid fa-phone"></i>
                                <a href="tel:+919471131443" className="">(+91) 9471131443</a>
                            </div>


                        </div>
                    </div>

                    <div className="">
                        <div className="border-2 border-black flex justify-center xl:justify-start gap-x-20  p-4 mt-24">
                            <div className="w-1/3   justify-center items-center hidden xl:flex">
                                <img className='w-full' src="images/contact.jpg" alt="png" />
                            </div>
                            <div className="flex flex-col gap-5  border-2 p-8 xl:p-16 border-gray-200">
                                <div className="text-gray-400">For any inquiries relating to my Retail and Leadership Programs*</div>
                                <div className="">
                                    <form>
                                        <div className="flex flex-col justify-center items-center gap-3 ">

                                            <input type="text" className='border-2 border-gray-400 pl-4 w-full  xl:w-[500px] ' placeholder='Name' />
                                            <input type="text" className='border-2 border-gray-400 pl-4 w-full xl:w-[500px] ' placeholder='Email' />
                                            <input type="text" className='border-2 border-gray-400 pl-4 w-full xl:w-[500px] ' placeholder='Subject' />
                                            <textarea className='border-2 border-gray-400 pl-4  w-full  xl:w-[500px] xl:h-[70px]' placeholder='Message' />
                                            <button className='bg-green-400 py-2 font-bold text-white  w-1/2 '>Send</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Contact