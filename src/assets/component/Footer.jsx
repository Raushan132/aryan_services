import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-black text-white grid md:grid-cols-3 lg:grid-cols-4  px-4  py-16 ">
                    <div className=" ml-4 md:ml-8  pr-12">
                        <div className=" mb-4">
                            <img className="w-[100px] animate-spin-slow" src="images/Logo.png" alt="" />
                           </div>
                           <div className="text-xl  ">Aryan Services Limited</div>
                            <div className="">Vijay Bhawan, 2nd Floor, Radium Road, Ashok Path, Ranchi 834001</div>
                        
                       
                    </div>
                    <div className="mx-4 md:mx-12 ">
                        <div className=" my-3 font-extrabold ">Quick as</div>
                        <div className="font-thin">
                            <ul>
                                <li><Link to="/about" >About us</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/client" >Client</Link></li>
                                <li><Link to="/Services" >Arcade</Link></li>
                                <li><Link to="/contact" >Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className=" mx-4 lg:mx-8 xl-24">
                        <div className="my-3  font-extrabold ">Get In Touch</div>
                        <div className="flex flex-col font-thin">
                            <a href="tel:+9194313 63109"><i className="  text-[13px] mr-2 fa-solid fa-phone"></i>+91 94313 63109</a>
                            <a href="tel:+919471131443"><i className=" text-[13px] mr-2 fa-solid fa-phone"></i>+91 94711 31443</a>
                            <a href="mailto:aryanlimited@gmail.com"><i className="text-[14px] mr-2 fa-solid fa-envelope"></i>aryanlimited@gmail.com</a>
                            {/* <a href=""><i className="text-[14px] mr-2 fa-solid fa-earth-americas"></i>roshntn@gmail.com</a> */}
                        </div>

                    </div>
                    <div className="">
                        
                        <div className="mx-4">
                            <div className="my-3  font-extrabold">Aryan Services Limited Social as</div>
                            <a href=""><i className="md:text-[16x] md:text-[22px] fa-brands fa-facebook-f"></i></a>
                            <a href=""><i className="md:text-[16x] md:text-[22px] mx-3 fa-brands fa-twitter"></i></a>
                            <a href=""><i className="md:text-[16x] md:text-[22px] fa-brands fa-instagram"></i></a>
                            <a href=""><i className="md:text-[16x] md:text-[22px] mx-3 fa-brands fa-aedin-in"></i></a>
                        </div>
                    </div>
                </div>

                <div className="bg-black text-white flex flex-col md:flex-row">
                    <div className=" px-4 font-thin md:px-8">Copyright by Aryan Services Limited. All rights reserved.</div>
                    <div className=" px-4 font-thin text-[16px] md:text-lg md:px-64">Powered by: <a className=" hover:text-red-800 duration-500" href="">Raushan Kumar </a></div>
                </div>
            </footer>

        </>
    )

}

export default Footer;