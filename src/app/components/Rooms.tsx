"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


type Props = {
    image: string
    name: string
    slug: string
    price: number
}
const Rooms = (props: Props) => {
    return (
        <Link className='  cursor-pointer' href={`/room/${props.slug}`}>
            <div className=''>
                <Image className='rounded-lg' src={props.image} width={500} height={300} alt={props.name} />
                <div>
                    <div className='flex gap-30 pt-4 items-center '>
                        <h2 className='text-2xl font-bold'>{props.name}</h2>
                        <div className='flex items-center gap-2'>
                            <div className='flex  gap-1'>
                                <span className='text-[#c86016] '><FaStar /></span>
                                <span className='text-[#c86016] '><FaStar /></span>
                                <span className='text-[#c86016] '><FaStar /></span>
                                <span className='text-[#c86016] '><FaStar /></span>
                                <span className='text-[#c86016] '><FaRegStar /></span>
                            </div>
                            <p>4.0</p>

                        </div>
                    </div>

                    <p className=' mt-1 text-[#FFB800] text-xl font-bold'>₦{props.price}<span className='text-gray-500 font-semibold'> /night</span></p>
                </div>
            </div>


        </Link>
    )
}

export default Rooms
