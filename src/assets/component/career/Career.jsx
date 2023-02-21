import React from 'react'

const Career = () => {
    return (
        <>
            <div className="flex flex-col items-start  sm:p-16 bg-[url('images/career_banner.png')] bg-[length:100%_80%] bg-no-repeat lg:bg-[length:100%_100%]" >
                <div className=" text-xl md:text-2xl lg:3xl xl:text-4xl xl:translate-x-72 p-8 text-white drop-shadow-md font-extrabold">Career </div>
            </div>

            <div className=" w-full overflow-hidden md:p-16 p-4 bg-gray-100 ">
                <div className="flex flex-col items-center mb-16" >
                    <h1 className=" text-lg md:text-xl lg:text-2xl p-8 text-indigo-400  font-extrabold">Recent Job/ <span className='text-red-400'>vacancies! </span></h1>

                </div>
                <div className="flex flex-col gap-10 md:mx-10 xl:items-center">

                    <div className="xl:w-[1000px] shadow-lg px-12 py-6 bg-white  flex flex-col justify-center ">
                        <div className="flex flex-col gap-2">
                            <div className="text-lg md:text-2xl font-extrabold">Security Guard ( 0 - 1 yrs)</div>
                            <div className=""><span className='text-md md:text-lg font-bold'>Experience Required:</span><span className='text-sm md:text-md'> 0-5 years</span></div>
                            <div className=""><span className='text-md md:text-lg font-bold'>Skills:</span><span className='text-sm md:text-md'> Ensuring safety and security of plant,project site, men and material Conducting plant patrolling and ensuring all the area are secured Keeping watch on dispatch vehicle to control theft and pilferages</span></div>
                            <div className=""><span className='text-md md:text-lg font-bold'>Description:</span><span className='text-sm md:text-md'> Monitor plant entrance and exit. Authorize entrance of people and vehicles. Report any suspicious behaviors and happenings. Provide assistance to people in need. Controlling vehicles movement and regularize the traffic.</span></div>
                        </div>
                        <div className="my-5">
                            <a className='bg-orange-500 shadow-lg shadow-gray-400 text-white font-bold cursor-pointer px-4 py-2 rounded-md' href="" >Apply Now</a>
                        </div>
                    </div>

                    <div className="xl:w-[1000px] shadow-lg px-12 py-6 bg-white  flex flex-col justify-center ">
                        <div className="flex flex-col gap-2">
                            <div className="text-lg md:text-2xl font-extrabold">Security Guard ( 0 - 1 yrs)</div>
                            <div className=""><span className='text-md md:text-lg font-bold'>Experience Required:</span><span className='text-sm md:text-md'> 0-5 years</span></div>
                            <div className=""><span className='text-md md:text-lg font-bold'>Skills:</span><span className='text-sm md:text-md'> Ensuring safety and security of plant,project site, men and material Conducting plant patrolling and ensuring all the area are secured Keeping watch on dispatch vehicle to control theft and pilferages</span></div>
                            <div className=""><span className='text-md md:text-lg font-bold'>Description:</span><span className='text-sm md:text-md'> Monitor plant entrance and exit. Authorize entrance of people and vehicles. Report any suspicious behaviors and happenings. Provide assistance to people in need. Controlling vehicles movement and regularize the traffic.</span></div>
                        </div>
                        <div className="my-5">
                            <a className='bg-orange-500 shadow-lg shadow-gray-400 text-white font-bold cursor-pointer px-4 py-2 rounded-md' href="" >Apply Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Career