import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { Autoplay,Pagination } from "swiper";

const SwapClient = () => {
    const[slides,setSlide] =useState(window.screen.width<720?"2":"4")

    const nextel=".bg-red-500 .text-green-500"
    
    
    return (
        <>
            <div className="mx-16">

                <Swiper
                    slidesPerView={slides}
                    spaceBetween={30}
                    autoplay={{ delay: 2000 }}
                    pagination={{
                        clickable: true,
                    }}
                
                    
                    modules={[Autoplay,Pagination]}

                    className="mySwiper h-[180px] md:h-[300px]"
                >

                    <SwiperSlide> <div className="border-2 flex justify-center p-2"><img className="w-[150px]" src="images/sail.png" alt="sail" /></div></SwiperSlide>
                    <SwiperSlide> <div className="border-2 flex justify-center p-2"><img className="w-[150px]" src="images/epfo.png" alt="epfo" /></div></SwiperSlide>
                    <SwiperSlide> <div className="border-2 flex justify-center p-2"><img className="w-[150px]" src="images/esic.png" alt="esic" /></div></SwiperSlide>
                    <SwiperSlide> <div className="border-2 flex justify-center p-2"><img className="w-[150px]" src="images/Indian_Council_of_Agricultural_Research.png" alt="Indian_Council_of_Agricultural_Research" /></div></SwiperSlide>
                    <SwiperSlide> <div className="border-2 flex justify-center p-2"><img className="w-[150px]" src="images/raj-hospital-ranchi.jpg" alt="raj-hospital-ranchi" /></div></SwiperSlide>
                    <SwiperSlide> <div className="border-2 flex justify-center p-2"><img className="w-[150px]" src="images/Ranchi_University_logo.png" alt="Ranchi_University_logo" /></div></SwiperSlide>
                    <SwiperSlide> <div className="border-2 flex justify-center p-2"><img className="w-[150px]" src="images/Ranihospital.png" alt="Ranihospital" /></div></SwiperSlide>


                </Swiper>

            </div>
        </>
    )
}

export default SwapClient