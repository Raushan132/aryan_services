import React from 'react'


const Sidebar = () => {
  return (
    <>
      <div className="fixed w-full">
        <div className="h-screen  md:w-1/3 lg:w-1/4 xl:w-1/6 bg-black text-white">
          <div className="">
            <div className=" ">
              <div className="flex  justify-center items-center">
                <img className='w-[100px] p-4' src="../images/Logo.png" alt="" />
                <div className="text-xl">Aryan Services Limited</div>
              </div>
              <hr className="w-full " />
            </div>
            <ul className='w-full flex flex-col  mt-10 '>
              <li className='w-full flex flex-col   text-xl'>
                <a className="w-full px-10 py-2 text-center md:text-start hover:bg-gray-500" href="">Dashboard</a>
                <a className="w-full px-10 py-2 text-center md:text-start hover:bg-gray-500" href="">Application Form</a>
                <a className="w-full px-10 py-2 text-center md:text-start hover:bg-gray-500" href="">Attendance</a>
                <a className="w-full px-10 py-2 text-center md:text-start hover:bg-gray-500" href="">Bill</a>
                <a className="w-full px-10 py-2 text-center md:text-start hover:bg-gray-500" href="">Message List</a>
                <a className="w-full px-10 py-2 text-center md:text-start hover:bg-gray-500" href="">Company Detail</a>
                <a className="w-full px-10 py-2 text-center md:text-start hover:bg-gray-500" href="">Website Edit</a>
                <a className="w-full px-10 py-2 text-center md:text-start hover:bg-gray-500" href="">Logout</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default Sidebar