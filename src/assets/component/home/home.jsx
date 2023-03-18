import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import SwapClient from '../client/SwapClient'


const home = () => {

  


  return (
    <>
      <div className="w-full overflow-hidden">
          <div className=" left-10 md:left-28 relative top-20 md:top-28">
            <div className="flex flex-col gap-2 ">
              <span className='capitalize font-extrabold text-blue-400  md:text-2xl lg:text-6xl'>leading agency</span>
              <span className='text-sm text-gray-500 w-1/2 md:w-1/4 lg:2xl'>of Security Services, Transport Provider, Material Supplier, Civil Supplier, building maintainer, Labour Supplier including Skilled and Unskilled Technician, Clerical Staff, Computer Operator etc....</span>
              <Link to="/about" className='md:w-1/6 font-bold md:font-extrabold text-red-400 cursor-pointer lg:text-2xl'>Know More</Link>
              </div>
             
          </div>
           <div  className="flex justify-end md:-translate-y-20 relative -z-10">
            <img className='w-1/2  md:mb-32 ' src="images/cartoon-1.png" alt=""/>
          </div>
          
          <img className='absolute top-64 md:top-32 w-full -z-20' src="images/frame.png" alt=""/>


      </div>
      <div className="mt-24 ">

        <div className="text-center font-extrabold text-2xl"><span className='text-red-400 '>Our</span> <spna className='text-blue-500'>Services</spna></div>

        <div className="grid  lg:grid-cols-2 items-stretch ">


          {/* content below */}
          <div className=" m-4 sm:m-16 flex flex-col items-center shadow-lg shadow-blue-200 p-8 hover:shadow-2xl hover:shadow-blue-400">
            <img className=" w-[150px]  " src="images/Security-Guard2.png" alt="guard" />
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
          <div className=" m-4 sm:m-16 flex flex-col items-center shadow-lg shadow-blue-200 p-8 hover:shadow-2xl hover:shadow-blue-400" >
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
          <div className="place-self-center lg:self-center font-extrabold ">
              <Link to="/services" className="py-2 px-4 border-2 cursor-pointer border-blue-400 w-1/3 text-center text-blue-600 shadow-lg">Recognize More</Link>
                
          </div>
        </div>

      </div>
      <div className="my-28">
        <div className="flex justify-center text-2xl mb-16 font-extrabold gap-2"><span className='text-red-400'>Our Some Great </span><span className='text-blue-600'>Client's</span></div>
        <SwapClient />
        <div className=" font-extrabold flex justify-center my-8 ">
              <Link to="/client" className="py-2 px-4 border-2 cursor-pointer border-blue-400 w-1/3 text-center text-blue-600 shadow-lg"> Client Detial's</Link>
                
          </div>
        
      </div>
      <div className=""></div>

    </>
  )
}

export default home