"use client"
import Image from 'next/image'
import Menu from "../assets/menu.svg"
import Close from "../assets/close.svg"
import { useState } from "react";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const navClose = () => {
        setNavbar(!navbar);
    };


    return (
        <nav className='flex w-full h-14 md:h-20 justify-between px-5 md:px-10 lg:px-14 items-center md:static fixed top-0 z-50'>
            
            <figure>
                <figcaption className="text-[#4169e1] font-extrabold text-xl">traBalance</figcaption>
            </figure>

            <div className="md:hidden">
                <button
                    className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={navClose}
                >
                    {navbar ? (
                        <Image src={Close} width={15} height={15} alt="close icon" />
                    ) : (
                        <Image src={Menu} width={15} height={15} alt="menu icon" />
                    )}
                </button>
            </div>
                <ul className={`${navbar ? "bg-[#4169e1] block h-screen fixed top-16 right-0 z-10 pl-5 pt-5 w-4/5 font-bold text-xl animate-open-menu" : "hidden"} md:flex justify-between md:w-3/5 bg-White`}>
                    <li><a href="/">About</a></li>
                    <li className='py-3 md:py-0'><a href="/">Company</a></li>
                    <li><a href="/">Contact</a></li>
                    <li className='py-3 md:py-0'><a href="/">Customer</a></li>
                    <li><a href="/">Startup</a></li>
                </ul>
        </nav>
     );
}
 
export default Navbar;