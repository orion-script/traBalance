"use client"
import Image from 'next/image'
import Menu from "../assets/menu.svg"
import Close from "../assets/close.svg"
import Link from 'next/link';
import { useState } from "react";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const navClose = () => {
        setNavbar(!navbar);
    };


    return (
        <nav className="w-full h-14 md:h-16 shadow-xl flex justify-between items-center px-5 md:px-20">
            <figure>
                <figcaption className="text-[#4169e1] font-extrabold text-xl">traBalance</figcaption>
            </figure>

            {/* HAMBURGER BUTTON FOR MOBILE */}
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

            <ul onClick={navClose} className={`${navbar ? "block" : "hidden"} bg-[#282c33] text-[#000] w-4/5 absolute md:sticky top-[55px] md:w-2/4`}>

                <li className="pb-6 md:pb-0 py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-600 border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    about
                </li>

                <li className="pb-6 md:pb-0 py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-600 border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    skills
                </li>


                <li className="pb-6 md:pb-0 py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-600 border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                   experience
                </li>

                <li className="pb-6 md:pb-0 py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-600 border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                   projects
                </li>

                <li className="pb-6 md:pb-0 py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-600 border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    contact
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;