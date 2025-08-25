"use client"
import React from 'react'
import Link from 'next/link'
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { useState } from 'react';
import { usePathname } from 'next/navigation';






const Header = () => {
    const [show, setShow] = useState<boolean>(false);
    const path = usePathname();

    const showMenu = () => {
        setShow((prev) => !prev)
    }

    const hideMenu = () => {
        setShow(false);
    }

    return (
        <div className={` w-full fixed z-50 ${show ? " overflow-y-hidden" : ""}`}>
            <div className='flex justify-between items-center py-4 sm:px-10 px-4  md:px-16 bg-[#B75600] text-white'>
                <div>
                    <Link href="/">
                        <h1 className='text-2xl font-bold italic'>Hotelio</h1>
                    </Link>
                </div>
                <div className='md:flex hidden space-x-4'>
                    <Link className={`hover:underline ${path.startsWith("/about") ? "active" : " "}`} href="/about">About Us</Link>
                    <Link className={`hover:underline ${path.startsWith("/facilities") ? "active" : ""}`} href="/facilities">Facilities</Link>
                    <Link className={`hover:underline ${path.startsWith("/rooms") ? "active" : " "}`} href="/rooms">Rooms</Link>
                    <Link className={`hover:underline ${path.startsWith("/contact") ? "active" : " "}`} href="/contact">Contact Us</Link>
                    <Link className={`hover:underline ${path.startsWith("/login") ? "active" : " "}`} href="/login">Login</Link>
                </div>
                <div className='block z-20 md:hidden' onClick={showMenu}>
                    {
                        show ? <div><FaTimes /></div> : <div><RxHamburgerMenu /></div>
                    }
                </div>
            </div>
            {/* for small screens */}
            <div className={` overflow-hidden w-full  z-20 bg-[#B75600]  transition-all duration-1000  ${show ? "max-h-screen " : "max-h-0"}  `}>
                <div className='flex flex-col h-screen  justify-center items-center space-y-20 text-white'>
                    <Link className='hover:text-black' href="/about">About Us</Link>
                    <Link className='hover:text-black' href="/facilities">Facilities</Link>
                    <Link className='hover:text-black' href="/rooms">Rooms</Link>
                    <Link className='hover:text-black' href="/contact">Contact Us</Link>
                    <Link className='hover:text-black' href="/login">Login</Link>
                </div>


            </div>






        </div>
    )
}

export default Header
