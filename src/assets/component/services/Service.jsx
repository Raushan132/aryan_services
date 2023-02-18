import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const service = () => {

    useEffect(() => {
        Aos.init({ duration: 500 })
    }, [])

    return (
        <>

<div className="flex flex-col items-start  p-16 bg-[url('images/Services_banner.jpg')] bg-[length:100%_80%] bg-no-repeat lg:bg-[length:100%_100%]" >
                <div className=" text-xl md:text-2xl lg:3xl xl:text-4xl xl:translate-x-72 p-8  drop-shadow-md font-extrabold text-green-400">Services</div>
            </div>
          
            <div className=" w-full overflow-hidden md:p-16 p-4  ">

            <div data-aos="fade-down" className="flex flex-col items-center mb-16" >
                    <h1 className=" text-lg md:text-xl lg:text-2xl p-8 text-indigo-400  font-extrabold">WHAT WE <span className='text-red-400'>GIVE! </span></h1>

                </div>
              
                <div className="grid  lg:grid-cols-2 items-stretch ">


                    {/* content below */}
                    <div className=" m-4 sm:m-16 flex flex-col items-center shadow-lg shadow-blue-200 p-8 hover:shadow-2xl hover:shadow-blue-400">
                        <img className=" w-[200px]  " src="images/Security-Guard2.png" alt="guard" />
                        <div className="">
                            <div className="">
                                <div className="flex flex-col justify-center">
                                    <div className="text-2xl font-bold text-center my-5">Security / Detective Agencies</div>
                                    <div className="">Aryan Services Limited provides Security and Detective Services to all organizations that require security solutions to minimize and eliminate threats to their physical infrastructure as well as protecting human resources. The services offered range from constant monitoring and controlled video surveillance to strengthen the safety and security of employees and their own customers.</div>
                                </div>

                            </div>

                        </div>
                    </div>



                    {/* content copy */}


                    <div className=" self-start m-4 sm:m-16 flex flex-col items-center shadow-lg shadow-blue-200 p-8 hover:shadow-2xl hover:shadow-blue-400" >
                        <img className=" w-[200px]  " src="images/cleaning1.png" alt="guard" />
                        <div className="">
                            <div className="">
                                <div className="flex flex-col justify-center">
                                    <div className="text-2xl font-bold text-center my-5">Cleaning Services</div>
                                    <div className="">Cleaning challenges are beneficial in every organization and to deal with it one must need the help of professional organization cleaning services. We make use of state of the art equipment with a high-quality chemical which helps us in offering better finishing in our work.</div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className=" m-4 sm:m-16 flex flex-col items-center shadow-lg shadow-blue-200 p-8 hover:shadow-2xl hover:shadow-blue-400" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <img className=" w-[200px]  " src="images/manpower1.png" alt="guard" />
                        <div className="">
                            <div className="">
                                <div className="flex flex-col justify-center">
                                    <div className="text-2xl font-bold text-center my-5">Manpower Recruitment Agency</div>
                                    <div className="">Our Agency provides best Human Resource Management to organizations and helps them address their critical talent needs by providing comprehensive Workforce Management from Recruitment Process Outsourcing to Staffing Solutions, Permanent Recruitment and Leadership Training and Development.</div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className=" m-4 sm:m-16 flex flex-col items-center shadow-lg shadow-blue-200 p-8 hover:shadow-2xl hover:shadow-blue-400" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <img className=" w-[200px]  " src="images/software2.png" alt="guard" />
                        <div className="">
                            <div className="">
                                <div className="flex flex-col justify-center">
                                    <div className="text-2xl font-bold text-center my-5">Software & Website Development Services</div>
                                    <div className="">Our software/website developers provide various type of website/software development and design services to clients. Our expert offers a variety of website design and development services, from creating mobile web development solutions and responsive website designs, to building custom e-commerce and intranet experiences using the latest and proven web technologies. Your appearance, usability and accessibility of your website is more important than ever, especially in an increasingly competitive market.</div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="self-start m-4 sm:m-16 flex flex-col items-center shadow-lg shadow-blue-200 p-8 hover:shadow-2xl hover:shadow-blue-400" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <img className=" w-[200px]  " src="images/contract1.png" alt="guard" />
                        <div className="">
                            <div className="">
                                <div className="flex flex-col justify-center">
                                    <div className="text-2xl font-bold text-center my-5">Work Contract Services</div>
                                    <div className="">Our firm provides work contract services in a professional manner, takes any and all specifications from the foreman at the work site and completes the work on time as per all legal precedents and blueprints.</div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className=" m-4 sm:m-16 flex flex-col items-center shadow-lg shadow-blue-200 p-8 hover:shadow-2xl hover:shadow-blue-400" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <img className=" w-[200px]  " src="images/construction-engineering-building.png" alt="guard" />
                        <div className="">
                            <div className="">
                                <div className="flex flex-col justify-center">
                                    <div className="text-xl font-bold text-center my-5">Construction services in respect of commercial or industrial buildings and civil structures</div>
                                    <div className="">Our services provide infrastructure of modern patterns in relation to the construction, repair, alteration or restoration of such buildings, civil structures or parts thereof, which can be used for the purposes of commerce and industry.</div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className=" m-4 sm:m-16 flex flex-col items-center shadow-lg shadow-blue-200 p-8 hover:shadow-2xl hover:shadow-blue-400" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <img className=" w-[200px]" src="images/transport.png" alt="guard" />
                        <div className="">
                            <div className="">
                                <div className="flex flex-col justify-center">
                                    <div className="text-2xl font-bold text-center my-5">Transport & Travel Agency</div>
                                    <div className="">Our services perform well in the field of transportation and travel which helps in facilitating the pace of human life.</div>
                                </div>

                            </div>

                        </div>
                    </div>
                  



                    </div>

            </div>

        </>
    )
}

export default service