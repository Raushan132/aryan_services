import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const about = () => {


    useEffect(() => {
        Aos.init({ duration: 500 })
    }, [])

    return (
        <>
            <div className="fixed w-full h-full bg-black bg-opacity-40 -z-10"></div>
            <div className=" w-full overflow-hidden md:p-16 p-4 bg-[url('https://png.pngtree.com/background/20210714/original/pngtree-sunset-cityscape-night-scene-with-office-building-background-picture-image_1207016.jpg')] bg-cover ">
                
                <div data-aos="zoom-in-down" className="flex justify-center ">
                    <div className="underline text-xl md:text-2xl lg:text-3xl p-8 text-white font-extrabold">About us</div>
                </div>

                <div className="flex flex-col md:items-center  gap-32 ">

                <div data-aos="fade-up" data-aos-duration="1000" className="bg-gradient-to-l from-green-200  to-gray-200 flex flex-col md:w-[700px] lg:w-[800px] justify-center shadow-lg shadow-blue-600 px-16 py-8 lg:-ml-96 ">

                        <div className="text-indigo-700 font-bold text-lg md:text-xl lg:text-2xl underline">The Company:</div>
                        <div className="translate-x-10 text-md md:text-lg translate-y-5">
                            <span className="font-bold"> Aryan Services Limited </span>
                            is a leading agency of Security Services,
                            Transport & Travel Providers, Material Suppliers, Civil Suppliers,
                            Building Maintainer, Labour Supplier including Skilled and Un-skilled
                            Technicians, Clerical Staff, Computer Operator,  Software & Website
                            Development Services etc.
                        </div>
                    </div>

                    <div data-aos="flip-up" className="bg-gradient-to-l from-green-200  to-gray-200 flex flex-col md:w-[700px] lg:w-[800px] justify-center shadow-lg shadow-blue-600 px-16 py-8 lg:ml-96 ">

                        <div className="text-indigo-700 font-bold text-2xl underline">Our Mission:</div>
                        <div className="translate-x-10 translate-y-5">
                            Our mission is to always deliver cost effective, 
                            total quality management services to all our clients.
                            
                            In order to reach and maintain our 
                            objective, Aryan Services Limited will invest 
                            in ways that will pay off in competitive advantages for its customers.
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="1000" className="bg-gradient-to-l from-green-200  to-gray-200 flex flex-col md:w-[700px] lg:w-[800px] justify-center shadow-lg shadow-blue-600 px-16 py-8 lg:-ml-24 ">

                        <div className="text-indigo-700 font-bold text-2xl underline">Our Vision:</div>
                        <div className="translate-x-10 translate-y-5">
                        Our vision is to abide by our mission applying the following to principles: 
                           <ul className='list-disc translate-x-10'>
                            <li>Ensuring highest quality of service at all times.</li>
                            <li>Setting goals & objectives and meeting them.</li>
                            <li>Cost effective and timely completion of projects/take assigned on time.</li>
                            <li>Proactive and swift adoption to changes.</li>
                           </ul>    
                        </div>
                    </div>



                </div>


            </div>

        </>
    )
}

export default about