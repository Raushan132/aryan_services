import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper";

const SwapClient = () => {
    return (
        <>
            <div className="mx-16">

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    autoplay={{ delay: 2000 }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}

                    className="mySwiper"
                >
                    <SwiperSlide> <div className="border-2 flex justify-center p-4"><img className="w-[100px]" src="images/sail.png" alt="sail" /></div></SwiperSlide>
                    <SwiperSlide> <div className="border-2 flex justify-center p-4"><img className="w-[100px]" src="images/epfo.png" alt="epfo" /></div></SwiperSlide>
                    <SwiperSlide> <div className="border-2 flex justify-center p-4"><img className="w-[100px]" src="images/esic.png" alt="esic" /></div></SwiperSlide>
                    <SwiperSlide> <div className="border-2 flex justify-center p-4"><img className="w-[100px]" src="images/Indian_Council_of_Agricultural_Research.png" alt="Indian_Council_of_Agricultural_Research" /></div></SwiperSlide>
                    <SwiperSlide> <div className="border-2 flex justify-center p-4"><img className="w-[100px]" src="images/raj-hospital-ranchi.jpg" alt="raj-hospital-ranchi" /></div></SwiperSlide>
                    <SwiperSlide> <div className="border-2 flex justify-center p-4"><img className="w-[100px]" src="images/Ranchi_University_logo.png" alt="Ranchi_University_logo" /></div></SwiperSlide>
                    <SwiperSlide> <div className="border-2 flex justify-center p-4"><img className="w-[100px]" src="images/Ranihospital.png" alt="Ranihospital" /></div></SwiperSlide>


                </Swiper>

            </div>
        </>
    )
}

export default SwapClient