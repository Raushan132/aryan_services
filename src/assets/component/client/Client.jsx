import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'




const Client = () => {

      useEffect(()=>{
            Aos.init({duration: 1000})
        },[])

  return (
    <>

            <div className="w-full overflow-hidden  md:p-16 p-4">


            <div data-aos="fade-down" className="flex justify-center lg:mt-8 ">
                    <div  className="underline text-xl md:text-2xl lg:text-3xl p-8 text-indigo-400 font-extrabold">Clients</div>
                </div>


            <div className="mx-20">
                  <div className="grid lg:grid-cols-2 ">
                 
                  
                  <div className="">
                  <div className="font-bold text-red-500 underline my-16">We have served all over the countries:-</div>
                 
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10">
                               <div data-aos="flip-left" className="flex justify-center items-center p-8 bg-gradient-to-tr from-blue-400 to-sky-200 text-center shadow-md hover:shadow-lg hover:shadow-blue-400 shadow-blue-400 hover:scale-110 text--500 font-bold">800+<br/>Current<br/> Employees</div>
                               <div data-aos="flip-left" className="flex justify-center items-center p-8 bg-gradient-to-tr from-blue-400 to-sky-200 text-center shadow-md hover:shadow-lg hover:shadow-blue-400 shadow-blue-400 hover:scale-110 text--500 font-bold">50+<br/>Current<br/> Projects</div>
                               <div data-aos="flip-left" className="text-[12px] flex justify-center items-center p-4 bg-gradient-to-tr from-blue-400 to-sky-200 text-center shadow-md hover:shadow-lg hover:shadow-blue-400 shadow-blue-400 hover:scale-110 text--500 font-bold">350+<br/>Client's we <br/>Worked with</div>
                               <div data-aos="flip-left" className="flex justify-center items-center p-8 bg-gradient-to-tr from-blue-400 to-sky-200 text-center shadow-md hover:shadow-lg hover:shadow-blue-400 shadow-blue-400 hover:scale-110 text--500 font-bold">SSS+<br/>Rating</div>
                              
 
                               
                   </div>
                   </div>
                   <img className='md:w-[200px] lg:w-[400px] xl:w-[600px] ' src="images/client.jpg" alt="" />
                  
                  </div>
           
                  
            </div>


            <div className="overflow-hidden mx-16">

                <div className="font-bold text-red-500 underline my-16">Our Some Satisfied Client's:-</div>
                <div className="grid  lg:grid-cols-2 xl:grid-cols-3 gap-5 ">
                    <div className=" flex flex-col justify-center items-center border-2 w-[350px] p-4 lg:p-8 gap-5 hover:border-black">
                          <div className="m-4"><img className='w-[100px]' src="http://aryanserviceslimited.com/wp-content/uploads/2021/10/sail.png" alt="" /></div>
                          <div className="">
                          Steel Authority of India Limited is a central public sector 
                          undertaking based in New Delhi, India. It is under the 
                          ownership of Ministry of Steel, Government of India with an 
                          annual turnover of INR 1,03,480 Crore for fiscal year 2021–22. 
                          Incorporated on 24 January 1973, SAIL has 60,766 employees.
                          </div>
                    </div>


                    {/* copy content below */}

                    <div className=" flex flex-col justify-center items-center border-2 w-[350px] p-8 gap-5">
                          <div className="m-4"><img className='w-[100px]' src="http://aryanserviceslimited.com/wp-content/uploads/2021/10/sail.png" alt="" /></div>
                          <div className="">
                          Steel Authority of India Limited is a central public sector 
                          undertaking based in New Delhi, India. It is under the 
                          ownership of Ministry of Steel, Government of India with an 
                          annual turnover of INR 1,03,480 Crore for fiscal year 2021–22. 
                          Incorporated on 24 January 1973, SAIL has 60,766 employees.
                          </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center border-2 w-[350px] p-8 gap-5">
                          <div className="m-4"><img className='w-[100px]' src="http://aryanserviceslimited.com/wp-content/uploads/2021/10/sail.png" alt="" /></div>
                          <div className="">
                          Steel Authority of India Limited is a central public sector 
                          undertaking based in New Delhi, India. It is under the 
                          ownership of Ministry of Steel, Government of India with an 
                          annual turnover of INR 1,03,480 Crore for fiscal year 2021–22. 
                          Incorporated on 24 January 1973, SAIL has 60,766 employees.
                          </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center border-2 w-[350px] p-8 gap-5">
                          <div className="m-4"><img className='w-[100px]' src="http://aryanserviceslimited.com/wp-content/uploads/2021/10/sail.png" alt="" /></div>
                          <div className="">
                          Steel Authority of India Limited is a central public sector 
                          undertaking based in New Delhi, India. It is under the 
                          ownership of Ministry of Steel, Government of India with an 
                          annual turnover of INR 1,03,480 Crore for fiscal year 2021–22. 
                          Incorporated on 24 January 1973, SAIL has 60,766 employees.
                          </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center border-2 w-[350px] p-8 gap-5">
                          <div className="m-4"><img className='w-[100px]' src="http://aryanserviceslimited.com/wp-content/uploads/2021/10/sail.png" alt="" /></div>
                          <div className="">
                          Steel Authority of India Limited is a central public sector 
                          undertaking based in New Delhi, India. It is under the 
                          ownership of Ministry of Steel, Government of India with an 
                          annual turnover of INR 1,03,480 Crore for fiscal year 2021–22. 
                          Incorporated on 24 January 1973, SAIL has 60,766 employees.
                          </div>
                    </div>
                    {/* copy content above */}


                </div>
                  </div>
            </div>
    
    </>
  )
}

export default Client