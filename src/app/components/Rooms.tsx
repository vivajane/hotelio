"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


type Props = {
    image: string
    name: string
    slug: string
    description: string
    price: number
}
const Rooms = (props: Props) => {
    return (
        <Link className='  cursor-pointer' href={`/room/${props.slug}`}>
            <div className='flex px-6 rounded-lg bg-white py-10 shadow-2xl gap-10'>
                <div>
                    <Image className='rounded-lg' src={props.image} width={800} height={300} alt={props.name} />
                </div>
                <div>
                    <div>
                        <h1 className='text-2xl py-4 font-bold text-[#B75600]'>{props.name}</h1>
                        <p className='text-base font-bold text-gray-600'>{props.description}</p>
                    </div>
                    <div className='flex py-8 justify-between'>
                       <div>
                        <h1 className='font-bold'>${props.price}</h1>
                         <div className='flex gap-1 items-center'>
                            <span className='flex gap-1'>
                                <FaStar size={20} className='text-yellow-500' />
                                <FaStar size={20} className='text-yellow-500' />
                                <FaStar size={20} className='text-yellow-500' />
                                <FaStar size={20} className='text-yellow-500' />
                            </span>
                            <span>
                                <CiStar size={25} className='text-yellow-500' />
                            </span>
                        </div>
                       </div>
                        <div>
                            <button className='bg-[#B75600] text-white py-2 px-4 rounded-lg'>Book Now</button>
                        </div>
                    </div>

                </div>
            </div>


        </Link>
    )
}

export default Rooms
