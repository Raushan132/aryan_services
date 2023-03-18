import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const about = () => {


    useEffect(() => {
        Aos.init({ duration: 500 })
    }, [])

    return (
        <>
            {/* <div className="flex flex-col items-start  p-16 bg-[url('images/AboutUs_Banner1.jpg')] bg-[length:100%_80%] bg-no-repeat lg:bg-[length:100%_100%]" >
                <div className=" text-xl md:text-2xl lg:3xl xl:text-4xl xl:translate-x-72 p-8 text-white drop-shadow-md font-extrabold">About  <span className='text-green-400'>Us</span></div>
            </div> */}

            <div className=" w-full overflow-hidden md:p-16 p-4 bg-gray-100">

                <div className="flex flex-col items-center mb-16" >
                    <h1 className=" text-lg md:text-xl lg:text-2xl p-8 text-indigo-400  font-extrabold">WHO WE <span className='text-red-400'>ARE! </span></h1>

                </div>

                <div className="flex flex-col md:items-center  gap-32 ">

                    <div className=" bg-white flex flex-col md:w-[700px] lg:w-[900px] justify-center shadow-lg  px-12 md:px-20 py-20  lg:-ml-96 ">

                        <div className="text-black font-bold text-lg md:text-xl lg:text-2xl underline">The Company:</div>
                        <div className="translate-x-10 text-md md:text-lg translate-y-5 ">
                            <span className="font-bold"> Aryan Services Limited (ASL) </span>
                            is a leading service provider agency based in India,
                            providing specialized services under its aims & objectives contained in the Memorandum &
                            Articles of Association to almost all industries as Health care, Oil & Gas, IT,
                            Construction, Hospitality, etc.<br/><br/>
                            <b>ASL</b> is a leading service provider agency based in India, providing specialized 
                            services to almost all industries such as Healthcare, Oil & Gas, IT, Research 
                            Centers, Construction, Transportation etc., under its goals and objectives

                        </div><br/>
                        <div className='translate-x-10 text-md md:text-lg translate-y-5'>
                         <b>Why ASL - </b>For any firm involved in the task of integrating the human resources with the proper platform,
                         the indispensable qualification required is the proper networking of all the resources. Our infrastructure
                         pool comprising of qualified engineers, doctors and management executives ensures that we deliver exactly what
                         our clients require. Besides, our self-motivated team possesses a flexible and adaptable attitude to unforeseen
                          work demands and also exhibit a helpful and courteous attitude in all the circumstance. 
	                    Maintaining the strong connection with leading institutions, organizations and their leadership 
                        is vital in order to articulate the needs of these organizations as they seek to fill their various level positions. 
                        We excel in vision, creativity and flexibility to identify the best candidate for a particular organization.

                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="1000" className=" flex flex-col md:w-[700px] justify-center shadow-lg shadow-black px-20 py-20  lg:ml-96 ">

                        <div className="text-black font-bold text-lg md:text-xl lg:text-2xl underline">Our Mission:</div>
                        <div className="translate-x-10  translate-y-5">
                            <ul className='list-disc '>

                                <li>
                                    Our mission is to always deliver cost effective,
                                    total quality management services to all our clients.
                                </li><br />
                                <li>
                                    In order to reach and maintain our
                                    objective, Aryan Services Limited will invest
                                    in ways that will pay off in competitive advantages for its customers.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="1000" className=" flex flex-col md:w-[700px] justify-center shadow-lg shadow-black px-12 md:px-28 py-20  lg:-ml-96 ">

                        <div className="text-black font-bold text-2xl underline">Our Vision:</div>
                        <div className=" md:translate-x-10 translate-y-5">
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